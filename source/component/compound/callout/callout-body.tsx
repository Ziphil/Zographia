//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const CalloutBody = createWithRef(
  require("./callout-body.scss"), "CalloutBody",
  function ({
    is = "div",
    children,
    ...rest
  }: {
    is?: string,
    children: ReactNode,
    className?: string,
    ref?: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...rest}>
        {children}
      </Is>
    );

  }
);
