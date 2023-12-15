//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/sharp-regular-svg-icons";
import {ForwardedRef, KeyboardEvent, MouseEvent, ReactElement, ReactNode} from "react";
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
    disabled,
    loading,
    hotkeys,
    onClick,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onPointerDown,
    children,
    ...rest
  }: {
    scheme?: LeveledColorScheme,
    variant?: "solid" | "outline",
    size?: "small" | "medium" | "large",
    type?: "submit" | "reset" | "button",
    disabled?: boolean,
    loading?: boolean,
    hotkeys?: string | Array<string>,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => unknown,
    onKeyUp?: (event: KeyboardEvent<HTMLButtonElement>) => unknown,
    onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    onPointerDown?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    return (
      <button
        styleName="root"
        type={type}
        disabled={disabled}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseDown={onMouseDown}
        onPointerDown={onPointerDown}
        {...data({
          scheme,
          variant,
          size,
          loading
        })}
        {...rest}
      >
        {children}
        <div styleName="loading" {...data({loading})} {...aria({hidden: true})}>
          <FontAwesomeIcon icon={faCircleNotch} spin={true}/>
        </div>
      </button>
    );

  }
);