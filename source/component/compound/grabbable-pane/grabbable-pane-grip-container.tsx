//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria} from "/source/module/data";


export const GrabbablePaneGripContainer = createWithRef(
  require("./grabbable-pane-grip-container.scss"), "GrabbablePaneGripContainer",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...rest} {...aria({hidden: true})}>
        {children}
      </div>
    );

  }
);
