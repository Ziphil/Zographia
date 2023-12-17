//

import {faCalendar, faClock} from "@fortawesome/sharp-regular-svg-icons";
import {ChangeEvent, ForwardedRef, ReactElement, ReactNode, useCallback} from "react";
import {AsyncOrSync} from "ts-essentials";
import {GeneralIcon} from "/source/component/atom/general-icon";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria} from "/source/module/data";


export const Input = createWithRef(
  require("./input.scss"), "Input",
  function ({
    value,
    name,
    type = "text",
    autoComplete = "off",
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
    ...rest
  }: {
    value?: string,
    name?: string,
    type?: "text" | "search" | "email" | "url" | "tel" | "date" | "time" | "datetime-local" | "month" | "week",
    autoComplete?: string,
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean,
    suggest?: (pattern: string) => AsyncOrSync<Array<SuggestionSpec>>,
    onSet?: (value: string) => unknown,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const handleChange = useCallback(function (event: ChangeEvent<HTMLInputElement>): void {
      const value = event.target.value;
      onSet?.(value);
      onChange?.(event);
    }, [onSet, onChange]);

    return (
      <label
        styleName="root"
        className={className}
      >
        <input
          styleName="input"
          value={value}
          name={name}
          type={type}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          readOnly={readonly}
          required={required}
          disabled={disabled}
          onChange={(onSet !== undefined || onChange !== undefined) ? handleChange : undefined}
          onBlur={onBlur}
          {...aria({
            invalid: error
          })}
          {...rest}
        />
        {children}
        {isAddonType(type) && (
          <div styleName="builtin-addon">
            <GeneralIcon icon={type === "time" ? faClock : faCalendar}/>
          </div>
        )}
      </label>
    );

  }
);


function isAddonType(type: string): boolean {
  return type === "date" || type === "time" || type === "datetime-local" || type === "month" || type === "week";
};

export type SuggestionSpec = {replacement: string, node: ReactNode};