//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const CardBody = createWithRef(
  require("./card-body.scss"), "CardBody",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...rest}>
        {children}
      </div>
    );

  }
);
