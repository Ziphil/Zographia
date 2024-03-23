//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faFiles} from "@fortawesome/sharp-regular-svg-icons";
import {
  ChangeEvent,
  FocusEvent,
  Fragment,
  ReactElement,
  ReactNode,
  Ref,
  useCallback,
  useRef,
  useState
} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";


export const FileInput = createWithRef(
  require("./file-input.scss"), "FileInput",
  <M extends boolean>({
    value = null as any,
    defaultValue,
    name,
    multiple,
    autoFocus,
    accepts,
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
    value?: FileInputGivenValue<M>,
    defaultValue?: FileInputGivenValue<M>,
    name?: string,
    multiple?: M,
    autoFocus?: boolean,
    accepts?: Array<string>,
    error?: boolean,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean,
    onSet?: (value: FileInputValue<M>) => unknown,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLInputElement>
  } & AdditionalProps): ReactElement => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [fileNameString, setFileNameString] = useState(getFileNameString(defaultValue));
    const [prevValue, setPrevValue] = useState(value);

    if (value !== prevValue) {
      setPrevValue(value);
      setFileNameString(getFileNameString(value));
    }

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
          accept={accepts?.join(",") ?? undefined}
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
          tabIndex={-1}
          onClick={handleClick}
          {...data({error})}
          {...aria({hidden: true})}
        >
          <span styleName="name">{fileNameString}</span>
          {children}
          <span styleName="builtin-addon">
            <FontAwesomeIcon icon={(multiple) ? faFiles : faFile}/>
          </span>
        </button>
      </Fragment>
    );

  }
);


export type FileInputValue<M extends boolean> = M extends true ? Array<File> : File | null;
export type FileInputGivenValue<M extends boolean> = M extends true ? Array<File | string> : File | string | null;

function getFileNameString(file: File | string | Array<File | string> | null | undefined): string {
  if (Array.isArray(file)) {
    return file.map(getFileNameString).join(", ");
  } else if (typeof file === "string") {
    return file;
  } else if (file !== null && file !== undefined) {
    return file.name;
  } else {
    return "";
  }
}