//

import {ReactElement, ReactNode, Ref} from "react";
import {ModalPane} from "/source/component/atom/modal";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const DialogPane = createWithRef(
  require("./dialog-pane.scss"), "DialogPane",
  function ({
    children,
    ...rest
  }: {
    children: ReactNode,
    className?: string,
    ref?: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <ModalPane styleName="root" {...rest}>
        {children}
      </ModalPane>
    );

  }
);
