//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const SingleLineText = createWithRef(
  require("./single-line-text.scss"), "SingleLineText",
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
        <span styleName="inner">
          {children}
        </span>
      </Is>
    );

  }
);
