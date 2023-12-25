//

import {ForwardedRef, KeyboardEvent, MouseEvent, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module/color";
import {AdditionalProps, data} from "/source/module/data";


export const Link = createWithRef(
  require("./link.scss"), "Link",
  function ({
    href,
    scheme = "primary",
    variant = "text",
    onClick,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onPointerDown,
    children,
    ...rest
  }: {
    href?: string,
    scheme?: LeveledColorScheme,
    variant?: "solid" | "light" | "text",
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => unknown,
    onKeyDown?: (event: KeyboardEvent<HTMLAnchorElement>) => unknown,
    onKeyUp?: (event: KeyboardEvent<HTMLAnchorElement>) => unknown,
    onMouseDown?: (event: MouseEvent<HTMLAnchorElement>) => unknown,
    onPointerDown?: (event: MouseEvent<HTMLAnchorElement>) => unknown,
    children?: ReactNode,
    className?: string,
    id?: string,
    ref: ForwardedRef<HTMLAnchorElement>
  } & AdditionalProps): ReactElement {

    return (
      <a
        styleName={variant === "text" ? "root-text" : "root"}
        href={href}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseDown={onMouseDown}
        onPointerDown={onPointerDown}
        {...data({
          scheme,
          variant
        })}
        {...rest}
      >
        {children}
      </a>
    );

  }
);