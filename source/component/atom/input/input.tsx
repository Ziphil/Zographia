//

import {useMergeRefs} from "@floating-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faClock} from "@fortawesome/sharp-regular-svg-icons";
import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useRef,
  useState,
  useTransition
} from "react";
import {AsyncOrSync} from "ts-essentials";
import {InputMenuItem} from "/source/component/atom/input/input-menu-item";
import {InputMenuPane} from "/source/component/atom/input/input-menu-pane";
import {createWithRef} from "/source/component/create";
import {useDebouncedCallback} from "/source/hook/debounce";
import {AdditionalProps, aria, data} from "/source/module/data";
import {useInputFloating, useInputInteraction} from "./input-hook";


export const Input = createWithRef(
  require("./input.scss"), "Input",
  function ({
    value,
    defaultValue,
    name,
    type = "text",
    placeholder,
    autoComplete,
    autoFocus,
    error,
    readonly,
    required,
    disabled,
    suggest,
    suggestionDuration = 300,
    onSet,
    onChange,
    onBlur,
    children,
    className,
    ref,
    ...rest
  }: {
    value?: string,
    defaultValue?: string,
    name?: string,
    type?: InputType,
    placeholder?: string,
    autoComplete?: string,
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean,
    suggest?: (pattern: string) => AsyncOrSync<Array<SuggestionSpec>>,
    suggestionDuration?: number,
    onSet?: (value: string) => unknown,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const [suggestionSpecs, setSuggestionSpecs] = useState<Array<SuggestionSpec>>([]);
    const [, startTransition] = useTransition();

    const innerRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs<HTMLInputElement>([ref, innerRef]);

    const floatingSpec = useInputFloating();
    const interactionSpec = useInputInteraction(floatingSpec.context, suggest !== undefined);
    const {setOpen, refs} = floatingSpec;
    const {activeIndex, setActiveIndex, getReferenceProps} = interactionSpec;

    const updateValue = useCallback(function (value: string): void {
      if (innerRef.current !== null) {
        innerRef.current.value = value;
        requestAnimationFrame(() => innerRef.current?.setSelectionRange(value.length, value.length));
        onSet?.(value);
      }
    }, [onSet]);

    const updateSuggestionSpecs = useDebouncedCallback(async function (value: string): Promise<void> {
      if (suggest !== undefined && value) {
        const suggestionSpecs = await suggest(value);
        startTransition(() => {
          setSuggestionSpecs(suggestionSpecs);
          setOpen(true);
          setActiveIndex(0);
        });
      } else {
        setOpen(false);
      }
    }, suggestionDuration, [suggest, setOpen, setActiveIndex]);

    const handleChange = useCallback(async function (event: ChangeEvent<HTMLInputElement>): Promise<void> {
      const value = event.target.value;
      updateSuggestionSpecs(value);
      onSet?.(value);
      onChange?.(event);
    }, [onSet, onChange, updateSuggestionSpecs]);

    const handleKeyDown = useCallback(function (event: KeyboardEvent<HTMLInputElement>): void {
      if (event.key === "Enter" && activeIndex !== null && suggestionSpecs[activeIndex]) {
        updateValue(suggestionSpecs[activeIndex].replacement);
        setOpen(false);
        setActiveIndex(null);
      }
    }, [suggestionSpecs, activeIndex, updateValue, setOpen, setActiveIndex]);

    return (
      <div styleName="root" className={className} ref={refs.setReference} {...data({disabled, error})}>
        <input
          styleName="input"
          value={value}
          defaultValue={defaultValue}
          name={name}
          type={toHtmlInputType(type)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          readOnly={readonly}
          required={required}
          disabled={disabled}
          {...aria({invalid: error})}
          {...rest}
          {...getReferenceProps({
            ref: mergedRef,
            onChange: handleChange,
            onKeyDown: handleKeyDown,
            onBlur
          })}
        />
        {children}
        {isAddonType(type) && (
          <span styleName="builtin-addon">
            <FontAwesomeIcon icon={(type === "time") ? faClock : faCalendar}/>
          </span>
        )}
        {(suggest !== undefined) && (
          <InputMenuPane floatingSpec={floatingSpec} interactionSpec={interactionSpec}>
            {suggestionSpecs.map((spec, index) => (
              <InputMenuItem key={index} index={index} spec={spec} updateValue={updateValue}/>
            ))}
          </InputMenuPane>
        )}
      </div>
    );

  }
);


function toHtmlInputType(type: InputType): string {
  if (type === "datetime") {
    return "datetime-local";
  } else {
    return type;
  }
}

function isAddonType(type: InputType): boolean {
  return type === "date" || type === "time" || type === "datetime" || type === "month" || type === "week";
};

export type InputType = "text" | "search" | "email" | "url" | "tel" | "date" | "time" | "datetime" | "month" | "week";
export type SuggestionSpec = {replacement: string, node: ReactNode};