//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const GrabbablePane = createWithRef(
  require("./grabbable-pane.scss"), "GrabbablePane",
  function ({
    is = "article",
    dragging = false,
    children,
    ...rest
  }: {
    is?: string,
    dragging?: boolean,
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...data({dragging})} {...rest}>
        {children}
      </Is>
    );

  }
);
