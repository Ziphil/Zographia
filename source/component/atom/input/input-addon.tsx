//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const InputAddon = createWithRef(
  require("./input-addon.scss"), "InputAddon",
  function ({
    position,
    children,
    ...rest
  }: {
    position: "left" | "right",
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...data({position})} {...rest}>
        {children}
      </div>
    );

  }
);