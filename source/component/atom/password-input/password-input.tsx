//


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/sharp-regular-svg-icons";
import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  ReactElement,
  ReactNode,
  useCallback,
  useState
} from "react";
import {createWithRef} from "/source/component/create";
import {useTrans} from "/source/hook/translation";
import {AdditionalProps, aria, data} from "/source/module/data";


export const PasswordInput = createWithRef(
  require("./password-input.scss"), "PasswordInput",
  function ({
    value,
    defaultValue,
    reveal,
    defaultReveal,
    name,
    autoComplete = "current-password",
    autoFocus,
    error,
    readonly,
    required,
    disabled,
    onSet,
    onRevealSet,
    onChange,
    onBlur,
    children,
    className,
    ref,
    ...rest
  }: {
    value?: string,
    defaultValue?: string,
    reveal?: boolean,
    defaultReveal?: boolean,
    name?: string,
    autoComplete?: "new-password" | "current-password" | "one-time-code" | "off",
    autoFocus?: boolean,
    error?: boolean,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean,
    onSet?: (value: string) => unknown,
    onRevealSet?: (reveal: boolean) => unknown,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const {trans} = useTrans("passwordInput");

    const [innerType, setInnerType] = useState((defaultReveal) ? "text" : "password");
    const type = (reveal !== undefined) ? (reveal) ? "text" : "password" : innerType;

    const handleChange = useCallback(function (event: ChangeEvent<HTMLInputElement>): void {
      const value = event.target.value;
      onSet?.(value);
      onChange?.(event);
    }, [onSet, onChange]);

    const handleEyeClick = useCallback(function (): void {
      if (reveal === undefined) {
        setInnerType((type === "text") ? "password" : "text");
      }
      onRevealSet?.(type === "text");
    }, [type, reveal, onRevealSet]);

    return (
      <div styleName="root" className={className} {...data({error})}>
        <input
          styleName="input"
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          name={name}
          type={type}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          readOnly={readonly}
          required={required}
          disabled={disabled}
          onChange={(onSet !== undefined || onChange !== undefined) ? handleChange : undefined}
          {...aria({invalid: error})}
          {...rest}
        />
        {children}
        <button
          styleName="eye"
          type="button"
          title={trans((type === "text") ? "hide" : "reveal")}
          onClick={handleEyeClick}
          {...aria({label: trans((type === "text") ? "hide" : "reveal")})}
        >
          <FontAwesomeIcon icon={(type === "text") ? faEyeSlash : faEye}/>
        </button>
      </div>
    );

  }
);