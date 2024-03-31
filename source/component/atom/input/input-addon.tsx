//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const InputAddon = createWithRef(
  require("./input-addon.scss"), "InputAddon",
  function ({
    position,
    hasGap = true,
    children,
    ...rest
  }: {
    position: "left" | "right",
    hasGap?: boolean,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLSpanElement>
  } & AdditionalProps): ReactElement {

    return (
      <span styleName="root" {...data({position, hasGap})} {...rest}>
        {children}
      </span>
    );

  }
);