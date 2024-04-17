//

import {ChangeEvent, FocusEvent, ForwardedRef, ReactElement, ReactNode, useCallback} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";


export const Textarea = createWithRef(
  require("./textarea.scss"), "Textarea",
  function ({
    value,
    defaultValue,
    name,
    fontFamily = "main",
    autoComplete = "off",
    autoCapitalize = "off",
    spellCheck = true,
    autoFocus,
    error,
    readonly,
    required,
    disabled,
    onSet,
    onChange,
    onBlur,
    children,
    className,
    ...rest
  }: {
    value?: string,
    defaultValue?: string,
    name?: string,
    fontFamily?: "main" | "monospace",
    autoComplete?: string,
    autoCapitalize?: string,
    spellCheck?: boolean,
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean,
    onSet?: (value: string) => unknown,
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => unknown,
    onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLTextAreaElement>
  } & AdditionalProps): ReactElement {

    const handleChange = useCallback(function (event: ChangeEvent<HTMLTextAreaElement>): void {
      const value = event.target.value;
      onSet?.(value);
      onChange?.(event);
    }, [onSet, onChange]);

    return (
      <div styleName="root" className={className} {...data({fontFamily, disabled, error})}>
        <textarea
          styleName="input"
          value={value}
          defaultValue={defaultValue}
          name={name}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          autoCorrect={(spellCheck) ? "on" : "off"}
          spellCheck={spellCheck}
          autoFocus={autoFocus}
          readOnly={readonly}
          required={required}
          disabled={disabled}
          onChange={(onSet !== undefined || onChange !== undefined) ? handleChange : undefined}
          {...data({fontFamily})}
          {...aria({invalid: error})}
          {...rest}
        />
        {children}
      </div>
    );

  }
);