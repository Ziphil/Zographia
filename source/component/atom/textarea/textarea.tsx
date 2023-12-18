//

import {ChangeEvent, FocusEvent, ForwardedRef, ReactElement, useCallback} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";


export const Textarea = createWithRef(
  require("./textarea.scss"), "Textarea",
  function ({
    value,
    name,
    autoComplete = "off",
    autoFocus,
    error,
    readonly,
    required,
    disabled,
    onSet,
    onChange,
    onBlur,
    className,
    ...rest
  }: {
    value?: string,
    name?: string,
    autoComplete?: string,
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean,
    onSet?: (value: string) => unknown,
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => unknown,
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => unknown,
    className?: string,
    ref: ForwardedRef<HTMLTextAreaElement>
  } & AdditionalProps): ReactElement {

    const handleChange = useCallback(function (event: ChangeEvent<HTMLTextAreaElement>): void {
      const value = event.target.value;
      onSet?.(value);
      onChange?.(event);
    }, [onSet, onChange]);

    return (
      <label styleName="root" className={className} {...data({error})}>
        <textarea
          styleName="input"
          value={value}
          name={name}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          readOnly={readonly}
          required={required}
          disabled={disabled}
          onChange={handleChange}
          {...aria({invalid: error})}
          {...rest}
        />
      </label>
    );

  }
);