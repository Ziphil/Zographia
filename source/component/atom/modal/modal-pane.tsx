//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ModalPane = createWithRef(
  require("./modal-pane.scss"), "ModalPane",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLElement>
  } & AdditionalProps): ReactElement {

    return (
      <article styleName="inner" {...rest}>
        {children}
      </article>
    );

  }
);
