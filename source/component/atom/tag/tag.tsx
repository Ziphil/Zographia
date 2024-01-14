//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module/color";
import {AdditionalProps, data} from "/source/module/data";


export const Tag = createWithRef(
  require("./tag.scss"), "Tag",
  function ({
    is = "span",
    scheme = "primary",
    variant = "light",
    size = "small",
    children,
    ...rest
  }: {
    is?: string,
    scheme?: LeveledColorScheme,
    variant?: "solid" | "light",
    size?: "small" | "medium",
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...data({scheme, variant, size})} {...rest}>
        {children}
      </Is>
    );

  }
);
