//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module";


export const TextareaAddon = createWithRef(
  require("./textarea-addon.scss"), "TextareaAddon",
  function ({
    position,
    children,
    ...rest
  }: {
    position: "top" | "bottom",
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLSpanElement>
  } & AdditionalProps): ReactElement {

    return (
      <span styleName="root" {...data({position})} {...rest}>
        {children}
      </span>
    );

  }
);