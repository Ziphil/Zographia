//


import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  ReactElement,
  ReactNode,
  useCallback
} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";


export const FileInput = createWithRef(
  require("./file-input.scss"), "FileInput",
  function <M extends boolean>({
    value,
    defaultValue,
    name,
    multiple,
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
    ref,
    ...rest
  }: {
    value?: M extends true ? Array<File> : File | null,
    defaultValue?: M extends true ? Array<File> : File | null,
    name?: string,
    multiple?: M,
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean,
    onSet?: (value: string) => unknown,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const handleChange = useCallback(async function (event: ChangeEvent<HTMLInputElement>): Promise<void> {
      const value = event.target.value;
      onSet?.(value);
      onChange?.(event);
    }, [onSet, onChange]);

    return (
      <label styleName="root" className={className} {...data({error})}>
        <input
          styleName="input"
          type="file"
          value={value}
          defaultValue={defaultValue}
          name={name}
          multiple={multiple}
          autoFocus={autoFocus}
          readOnly={readonly}
          required={required}
          disabled={disabled}
          {...aria({invalid: error})}
          {...rest}
        />
        {children}
      </label>
    );

  }
);