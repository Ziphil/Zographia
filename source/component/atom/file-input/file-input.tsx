//


import {faFile, faFiles} from "@fortawesome/sharp-regular-svg-icons";
import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  Fragment,
  ReactElement,
  ReactNode,
  useCallback,
  useRef,
  useState
} from "react";
import {GeneralIcon} from "/source/component/atom/general-icon";
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
    onSet?: M extends true ? (value: Array<File>) => unknown : (value: File | null) => unknown,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const inputRef = useRef<HTMLInputElement>(null);
    const [fileNameString, setFileNameString] = useState(getFileNameString(defaultValue));

    const handleChange = useCallback(function (event: ChangeEvent<HTMLInputElement>): void {
      const files = Array.from(event.target.files ?? []);
      if (multiple) {
        onSet?.(files as any);
      } else {
        onSet?.(files[0] as any ?? null);
      }
      onChange?.(event);
      setFileNameString(getFileNameString(files));
    }, [multiple, onSet, onChange]);

    const handleClick = useCallback(function (): void {
      inputRef.current?.click();
    }, []);

    return (
      <Fragment>
        <input
          styleName="input"
          type="file"
          name={name}
          multiple={multiple}
          autoFocus={autoFocus}
          readOnly={readonly}
          required={required}
          disabled={disabled}
          ref={inputRef}
          onChange={handleChange}
          {...aria({invalid: error})}
          {...rest}
        />
        <button
          styleName="root"
          className={className}
          type="button"
          onClick={handleClick}
          {...data({error})}
          {...aria({hidden: true})}
        >
          <span styleName="name">{fileNameString}</span>
          {children}
          <span styleName="builtin-addon">
            <GeneralIcon icon={(multiple) ? faFiles : faFile}/>
          </span>
        </button>
      </Fragment>
    );

  }
);


function getFileNameString(file: File | Array<File> | null | undefined): string {
  if (Array.isArray(file)) {
    return file.map(getFileNameString).join(", ");
  } else if (file !== null && file !== undefined) {
    return file.name;
  } else {
    return "";
  }
}