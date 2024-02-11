//

import {AnchorHTMLAttributes, ComponentType, ForwardedRef, HTMLAttributeAnchorTarget, KeyboardEvent, MouseEvent, PointerEvent, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module/color";
import {AdditionalProps, data} from "/source/module/data";


export const Link = createWithRef(
  require("./link.scss"), "Link",
  function ({
    href,
    scheme = "primary",
    variant = "underline",
    target,
    is = "a",
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
    variant?: "solid" | "light" | "underline" | "simple" | "unstyledUnderline" | "unstyledSimple",
    target?: HTMLAttributeAnchorTarget,
    is?: "a" | ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>,
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => unknown,
    onKeyDown?: (event: KeyboardEvent<HTMLAnchorElement>) => unknown,
    onKeyUp?: (event: KeyboardEvent<HTMLAnchorElement>) => unknown,
    onMouseDown?: (event: MouseEvent<HTMLAnchorElement>) => unknown,
    onPointerDown?: (event: PointerEvent<HTMLAnchorElement>) => unknown,
    children?: ReactNode,
    className?: string,
    id?: string,
    ref: ForwardedRef<HTMLAnchorElement>
  } & AdditionalProps): ReactElement {

    const Is = is;

    return (
      <Is
        styleName={getStyleName(variant)}
        href={href}
        target={target}
        rel={(target === "_blank") ? "noopener noreferrer" : undefined}
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
      </Is>
    );

  }
);


function getStyleName(variant: "solid" | "light" | "underline" | "simple" | "unstyledUnderline" | "unstyledSimple"): string {
  if (variant === "solid" || variant === "light") {
    return "root";
  } else if (variant === "underline" || variant === "simple") {
    return "root-text";
  } else {
    return "root-unstyled";
  }
}