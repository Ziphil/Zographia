//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const Tag = createWithRef(
  require("./tag.scss"), "Tag",
  function ({
    is = "span",
    size = "small",
    children,
    ...rest
  }: {
    is?: string,
    size?: "small" | "medium",
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...data({size})} {...rest}>
        {children}
      </Is>
    );

  }
);
