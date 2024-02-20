/* eslint-disable quote-props, @typescript-eslint/naming-convention */

import {ChangeEvent, FocusEvent, ReactElement, ReactNode, cloneElement, useCallback, useMemo, useRef, useState, useTransition} from "react";
import {AsyncOrSync} from "ts-essentials";
import {create} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";
import {AsyncSelectContextProvider} from "./async-select-context";
import {useAsyncSelectFloating, useAsyncSelectInteraction} from "./async-select-hook";
import {AsyncSelectMenuPane} from "./async-select-menu-pane";


export const AsyncSelect = create(
  require("./async-select.scss"), "AsyncSelect",
  function <V>({
    value,
    defaultValue,
    error,
    loadOptions,
    onSet,
    renderLabel,
    children,
    className,
    ...rest
  }: {
    value?: V | null,
    defaultValue?: V | null,
    error?: boolean,
    loadOptions: (pattern: string) => AsyncOrSync<Array<V>>,
    onSet?: (value: V) => unknown,
    renderLabel?: (value: V) => ReactNode,
    children: (value: V) => ReactElement,
    className?: string
  } & AdditionalProps): ReactElement {

    const [innerValue, setInnerValue] = useState(defaultValue);
    const actualValue = (value !== undefined) ? value : innerValue;
    const controlled = value !== undefined;

    const [options, setOptions] = useState<Array<V>>([]);
    const [, startTransition] = useTransition();

    const inputElementRef = useRef<HTMLInputElement>(null);
    const [showLabel, setShowLabel] = useState(true);

    const floatingSpec = useAsyncSelectFloating();
    const interactionSpec = useAsyncSelectInteraction(floatingSpec.context);
    const {refs} = floatingSpec;
    const {getReferenceProps} = interactionSpec;

    const handleChange = useCallback(async function (event: ChangeEvent<HTMLInputElement>): Promise<void> {
      const value = event.target.value;
      if (value !== "") {
        setShowLabel(false);
        const options = await loadOptions(value);
        startTransition(() => {
          setOptions(options);
        });
      }
    }, [loadOptions]);

    const handleBlur = useCallback(function (event: FocusEvent<HTMLInputElement>): void {
      setShowLabel(true);
      if (inputElementRef.current !== null) {
        inputElementRef.current.value = "";
      }
    }, []);

    const updateValue = useCallback(function (nextValue: V): void {
      if (!controlled) {
        setInnerValue(nextValue);
      }
      onSet?.(nextValue);
      setShowLabel(true);
      if (inputElementRef.current !== null) {
        inputElementRef.current.value = "";
      }
    }, [controlled, onSet]);

    return (
      <div styleName="root" className={className} ref={refs.setReference} {...data({error})}>
        <div styleName="container">
          <input
            styleName="input"
            {...aria({invalid: error})}
            {...rest}
            {...getReferenceProps({
              ref: inputElementRef,
              onChange: handleChange
            })}
          />
          {(actualValue !== undefined && actualValue !== null) && (
            <div styleName="label" {...data({hidden: !showLabel})} {...aria({hidden: true})}>
              {renderLabel?.(actualValue) ?? String(actualValue)}
            </div>
          )}
        </div>
        <AsyncSelectMenuPane floatingSpec={floatingSpec} interactionSpec={interactionSpec}>
          <AsyncSelectContextProvider value={useMemo(() => ({updateValue}), [updateValue])}>
            {options.map((value, index) => cloneElement(children(value), {index, value}))}
          </AsyncSelectContextProvider>
        </AsyncSelectMenuPane>
      </div>
    );

  }
);