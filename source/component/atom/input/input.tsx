//

import {useMergeRefs} from "@floating-ui/react";
import {faCalendar, faClock} from "@fortawesome/sharp-regular-svg-icons";
import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  ReactElement,
  ReactNode,
  useCallback,
  useRef,
  useState,
  useTransition
} from "react";
import {AsyncOrSync} from "ts-essentials";
import {GeneralIcon} from "/source/component/atom/general-icon";
import {InputMenuPane} from "/source/component/atom/input/input-menu-pane";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";
import {useInputFloating, useInputInteraction} from "./input-hook";


export const Input = createWithRef(
  require("./input.scss"), "Input",
  function ({
    value,
    defaultValue,
    name,
    type = "text",
    autoComplete,
    autoFocus,
    error,
    readonly,
    required,
    disabled,
    suggest,
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
    autoComplete?: string,
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean,
    suggest?: (pattern: string) => AsyncOrSync<Array<SuggestionSpec>>,
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
    const {setActiveIndex, getReferenceProps} = interactionSpec;

    const handleChange = useCallback(async function (event: ChangeEvent<HTMLInputElement>): Promise<void> {
      const value = event.target.value;
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
      onSet?.(value);
      onChange?.(event);
    }, [suggest, setOpen, setActiveIndex, onSet, onChange]);

    const updateValue = useCallback(function (value: string): void {
      if (innerRef.current !== null) {
        innerRef.current.value = value;
        requestAnimationFrame(() => innerRef.current?.setSelectionRange(value.length, value.length));
        onSet?.(value);
      }
    }, [onSet]);

    return (
      <>
        <div styleName="root" className={className} ref={refs.setReference} {...data({error})}>
          <input
            styleName="input"
            value={value}
            defaultValue={defaultValue}
            name={name}
            type={toHtmlInputType(type)}
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
              onBlur
            })}
          />
          {children}
          {isAddonType(type) && (
            <span styleName="builtin-addon">
              <GeneralIcon icon={(type === "time") ? faClock : faCalendar}/>
            </span>
          )}
        </div>
        {(suggest !== undefined) && (
          <InputMenuPane
            suggestionSpecs={suggestionSpecs}
            updateValue={updateValue}
            floatingSpec={floatingSpec}
            interactionSpec={interactionSpec}
          />
        )}
      </>
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