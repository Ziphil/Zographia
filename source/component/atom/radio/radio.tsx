//

import {useId} from "@floating-ui/react";
import {ChangeEvent, ForwardedRef, ReactElement, useCallback, useContext} from "react";
import {radioGroupContext} from "/source/component/atom/radio-group/radio-group-context";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";


export const Radio = createWithRef(
  require("./radio.scss"), "Radio",
  function ({
    checked,
    defaultChecked,
    name,
    value,
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
    checked?: boolean,
    defaultChecked?: boolean,
    name?: string,
    value?: string,
    error?: boolean,
    required?: boolean,
    disabled?: boolean,
    onSet?: (checked: boolean) => unknown,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => unknown,
    className?: string,
    ref: ForwardedRef<HTMLInputElement>
  } & AdditionalProps): ReactElement {

    const id = useId();
    const groupSpec = useContext(radioGroupContext);

    const handleChange = useCallback(function (event: ChangeEvent<HTMLInputElement>): void {
      if (groupSpec?.onSet !== undefined && value !== undefined) {
        groupSpec.onSet(value);
      } else {
        const checked = event.target.checked;
        onSet?.(checked);
      }
      onChange?.(event);
    }, [value, groupSpec, onSet, onChange]);

    return (
      <div styleName="root" className={className} {...data({error})}>
        <input
          styleName="input"
          type="radio"
          checked={(groupSpec?.value !== undefined) ? groupSpec.value === value : (checked !== undefined) ? checked : undefined}
          defaultChecked={defaultChecked}
          name={groupSpec?.name ?? name}
          value={value}
          required={required}
          disabled={disabled}
          id={id}
          ref={ref}
          onChange={(groupSpec?.onSet !== undefined || onSet !== undefined || onChange !== undefined) ? handleChange : undefined}
          onBlur={onBlur}
          {...aria({invalid: error})}
          {...rest}
        />
        <label styleName="label" htmlFor={id} {...aria({hidden: true})}>
          <div styleName="icon"/>
        </label>
      </div>
    );

  }
);