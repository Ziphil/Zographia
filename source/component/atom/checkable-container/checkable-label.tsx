import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const CheckableLabel = createWithRef(
  require("./checkable-label.scss"), "CheckableLabel",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...rest}>
        {children}
      </div>
    );

  }
);