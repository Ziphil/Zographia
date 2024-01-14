//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const VisuallyHidden = createWithRef(
  require("./visually-hidden.scss"), "VisuallyHidden",
  function ({
    is = "div",
    children,
    ...rest
  }: {
    is?: string,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...rest}>
        {children}
      </Is>
    );

  }
);
