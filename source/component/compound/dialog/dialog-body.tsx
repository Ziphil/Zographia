//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const DialogBody = createWithRef(
  require("./dialog-body.scss"), "DialogBody",
  function ({
    is = "div",
    children,
    ...rest
  }: {
    is?: string,
    children: ReactNode,
    className?: string,
    ref?: Ref<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...rest}>
        {children}
      </Is>
    );

  }
);
