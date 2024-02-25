//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ControlGroup = createWithRef(
  require("./control-group.scss"), "ControlGroup",
  function ({
    children,
    className,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" className={["control-group", className].join(" ")} {...rest}>
        {children}
      </div>
    );

  }
);