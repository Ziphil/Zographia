/* eslint-disable quote-props, @typescript-eslint/naming-convention */

import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  cloneElement,
  useCallback,
  useMemo,
  useRef,
  useState,
  useTransition
} from "react";
import {AsyncOrSync} from "ts-essentials";
import {LoadingIcon} from "/source/component/atom/loading-icon";
import {create} from "/source/component/create";
import {useDebouncedCallback} from "/source/hook/debounce";
import {AdditionalProps, aria, data} from "/source/module/data";
import {AsyncSelectContextProvider} from "./async-select-context";
import {useAsyncSelectFloating, useAsyncSelectInteraction} from "./async-select-hook";
import {AsyncSelectMenuPane} from "./async-select-menu-pane";


export const AsyncSelect = create(
  require("./async-select.scss"), "AsyncSelect",
  function <V, O extends V = V>({
    value,
    defaultValue,
    error,
    loadOptions,
    loadDuration = 300,
    onSet,
    renderLabel,
    children,
    className,
    ...rest
  }: {
    value?: V | null,
    defaultValue?: V | null,
    error?: boolean,
    loadOptions: (pattern: string) => AsyncOrSync<Array<O>>,
    loadDuration?: number,
    onSet?: (value: O) => unknown,
    renderLabel: (value: V) => ReactNode,
    children: (value: O) => ReactElement,
    className?: string
  } & AdditionalProps): ReactElement {

    const [innerValue, setInnerValue] = useState(defaultValue);
    const actualValue = (value !== undefined) ? value : innerValue;
    const controlled = value !== undefined;

    const [options, setOptions] = useState<Array<O>>([]);
    const [loading, setLoading] = useState(false);
    const [, startTransition] = useTransition();

    const inputElementRef = useRef<HTMLInputElement>(null);
    const afterUpdateValueRef = useRef<boolean>(false);

    const floatingSpec = useAsyncSelectFloating();
    const interactionSpec = useAsyncSelectInteraction(floatingSpec.context);
    const {open, setOpen, refs} = floatingSpec;
    const {activeIndex, setActiveIndex, getReferenceProps} = interactionSpec;

    const updateValue = useCallback(function (nextValue: O): void {
      if (!controlled) {
        setInnerValue(nextValue);
      }
      onSet?.(nextValue);
      afterUpdateValueRef.current = true;
      if (inputElementRef.current !== null) {
        inputElementRef.current.value = "";
      }
    }, [controlled, onSet]);

    const updateOptions = useDebouncedCallback(async function (value: string): Promise<void> {
      const options = await loadOptions(value);
      startTransition(() => {
        setLoading(false);
        setOptions(options);
      });
    }, loadDuration, [loadOptions]);

    const handleChange = useCallback(async function (event: ChangeEvent<HTMLInputElement>): Promise<void> {
      const value = event.target.value;
      setOpen(true);
      setLoading(true);
      updateOptions(value);
    }, [updateOptions, setOpen]);

    const handleKeyDown = useCallback(function (event: KeyboardEvent<HTMLInputElement>): void {
      if (event.key === "Enter" && activeIndex !== null && options[activeIndex]) {
        updateValue(options[activeIndex]);
        setOpen(false);
        setActiveIndex(null);
      }
    }, [options, activeIndex, updateValue, setOpen, setActiveIndex]);

    const handleMenuFocusSet = useCallback(function (menuFocus: boolean): void {
    }, []);

    const handleFocus = useCallback(function (event: FocusEvent<HTMLInputElement>): void {
      if (!afterUpdateValueRef.current) {
        setOpen(true);
      }
      afterUpdateValueRef.current = false;
    }, [setOpen]);

    const handleBlur = useCallback(function (event: FocusEvent<HTMLInputElement>): void {
      setOpen(false);
      if (inputElementRef.current !== null) {
        inputElementRef.current.value = "";
      }
    }, [setOpen]);

    return (
      <div styleName="root" className={className} ref={refs.setReference} {...data({error})}>
        <div styleName="container">
          <input
            styleName="input"
            {...aria({invalid: error})}
            {...rest}
            {...getReferenceProps({
              ref: inputElementRef,
              onChange: handleChange,
              onKeyDown: handleKeyDown,
              onFocus: handleFocus,
              onBlur: handleBlur
            })}
          />
          {(actualValue !== undefined && actualValue !== null) && (
            <div styleName="label" {...data({hidden: open})} {...aria({hidden: open})}>
              {renderLabel(actualValue)}
            </div>
          )}
        </div>
        <AsyncSelectMenuPane floatingSpec={floatingSpec} interactionSpec={interactionSpec} onFocusSet={handleMenuFocusSet}>
          <AsyncSelectContextProvider value={useMemo(() => ({updateValue}), [updateValue])}>
            {(loading) ? (
              <div styleName="loading">
                <LoadingIcon/>
              </div>
            ) : (
              options.map((value, index) => cloneElement(children(value), {index, value}))
            )}
          </AsyncSelectContextProvider>
        </AsyncSelectMenuPane>
      </div>
    );

  }
);