//

import {ReactElement, ReactNode, Ref, useContext} from "react";
import {ModalPane} from "/source/component/atom/modal";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";
import {alertContext} from "./alert-context";


export const AlertPane = createWithRef(
  require("./alert-pane.scss"), "AlertPane",
  function ({
    children,
    ...rest
  }: {
    children: ReactNode,
    className?: string,
    ref?: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    const {scheme} = useContext(alertContext);

    return (
      <ModalPane styleName="root" {...data({scheme})} {...rest}>
        {children}
      </ModalPane>
    );

  }
);
