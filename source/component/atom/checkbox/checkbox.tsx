//

import {useId, useMergeRefs} from "@floating-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faMinus} from "@fortawesome/sharp-solid-svg-icons";
import {
  ChangeEvent,
  ForwardedRef,
  ReactElement,
  useCallback,
  useEffect,
  useRef
} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";


export const Checkbox = createWithRef(
  require("./checkbox.scss"), "Checkbox",
  function ({
    checked,
    name,
    error,
    required,
    disabled,
    onSet,
    onChange,
    onBlur,
    className,
    ref,
    ...rest
  }: {
    checked?: true | false | "indeterminate",
    name?: string,
    error?: boolean,
    required?: boolean,
    disabled?: boolean,
    onSet?: (isChecked: true | false) => unknown,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const id = useId();
    const innerRef = useRef<HTMLInputElement>(null);
    const mergedRef = useMergeRefs([ref, innerRef]);

    const handleChange = useCallback(function (event: ChangeEvent<HTMLInputElement>): void {
      const checked = event.target.checked;
      onSet?.(checked);
      onChange?.(event);
    }, [onSet, onChange]);

    useEffect(() => {
      if (innerRef.current !== null) {
        innerRef.current.indeterminate = checked === "indeterminate";
      }
    }, [checked]);

    return (
      <div
        styleName="root"
        className={className}
        {...data({error})}
      >
        <input
          styleName="input"
          type="checkbox"
          checked={(checked !== undefined) ? checked === true : undefined}
          name={name}
          required={required}
          disabled={disabled}
          id={id}
          ref={mergedRef}
          onChange={(onSet !== undefined || onChange !== undefined) ? handleChange : undefined}
          onBlur={onBlur}
          {...aria({invalid: error})}
          {...rest}
        />
        <label styleName="label" htmlFor={id} {...aria({hidden: true})}>
          <FontAwesomeIcon styleName="icon" icon={checked === "indeterminate" ? faMinus : faCheck}/>
        </label>
      </div>
    );

  }
);