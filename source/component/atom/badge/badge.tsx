//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module/color";
import {AdditionalProps, data} from "/source/module/data";


export const Badge = createWithRef(
  require("./badge.scss"), "Badge",
  function ({
    is = "span",
    scheme = "primary",
    variant = "light",
    size = "medium",
    animate = false,
    children,
    ...rest
  }: {
    is?: string,
    scheme?: LeveledColorScheme,
    variant?: "solid" | "light",
    size?: "small" | "medium",
    animate?: boolean,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...data({scheme, variant, size, animate})} {...rest}>
        {children}
      </Is>
    );

  }
);
