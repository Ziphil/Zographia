//

import {ReactElement, ReactNode, Ref, useContext} from "react";
import {ModalPane} from "/source/component/atom/modal";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";
import {dialogContext} from "./dialog-context";


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

    const {scheme} = useContext(dialogContext);

    return (
      <ModalPane styleName="root" {...data({scheme})} {...rest}>
        {children}
      </ModalPane>
    );

  }
);
