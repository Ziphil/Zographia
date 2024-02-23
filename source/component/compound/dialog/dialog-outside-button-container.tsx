//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const DialogOutsideButtonContainer = createWithRef(
  require("./dialog-outside-button-container.scss"), "DialogOutsideButtonContainer",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref?: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...rest}>
        {children}
      </div>
    );

  }
);
