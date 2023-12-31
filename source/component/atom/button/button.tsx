//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/sharp-regular-svg-icons";
import {ForwardedRef, KeyboardEvent, MouseEvent, PointerEvent, ReactElement, ReactNode, useCallback, useState} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module/color";
import {AdditionalProps, aria, data} from "/source/module/data";


export const Button = createWithRef(
  require("./button.scss"), "Button",
  function ({
    scheme = "primary",
    variant = "solid",
    size = "medium",
    type = "button",
    reactive = true,
    disabled,
    loading,
    onClick,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onPointerDown,
    children,
    ...rest
  }: {
    scheme?: LeveledColorScheme,
    variant?: "solid" | "light" | "text",
    size?: "small" | "medium" | "large",
    type?: "submit" | "reset" | "button",
    reactive?: boolean,
    disabled?: boolean,
    loading?: boolean,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => unknown,
    onKeyUp?: (event: KeyboardEvent<HTMLButtonElement>) => unknown,
    onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    onPointerDown?: (event: PointerEvent<HTMLButtonElement>) => unknown,
    children?: ReactNode,
    className?: string,
    id?: string,
    ref: ForwardedRef<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    const [innerLoading, setInnerLoading] = useState(false);
    const actualLoading = (reactive) ? innerLoading : loading;

    const handleClick = useCallback(async function (event: MouseEvent<HTMLButtonElement>): Promise<void> {
      event.preventDefault();
      if (!actualLoading) {
        if (reactive && onClick) {
          setInnerLoading(true);
          const result = onClick(event);
          if (result !== null && typeof result === "object" && "then" in result && typeof result.then === "function") {
            result.then(() => setInnerLoading(false)).catch(() => null);
          } else {
            setInnerLoading(false);
          }
        } else {
          onClick?.(event);
        }
      }
    }, [reactive, actualLoading, onClick]);

    return (
      <button
        styleName={variant === "text" ? "root-text" : "root"}
        type={type}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseDown={onMouseDown}
        onPointerDown={onPointerDown}
        {...data({
          scheme,
          variant,
          size,
          loading: actualLoading
        })}
        {...aria({
          disabled: disabled || actualLoading
        })}
        {...rest}
      >
        {children}
        <div styleName="loading" {...data({loading: actualLoading})} {...aria({hidden: true})}>
          <FontAwesomeIcon icon={faCircleNotch} spin={true}/>
        </div>
      </button>
    );

  }
);