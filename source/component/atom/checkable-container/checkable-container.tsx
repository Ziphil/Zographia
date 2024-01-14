import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const CheckableContainer = createWithRef(
  require("./checkable-container.scss"), "CheckableContainer",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLLabelElement>
  } & AdditionalProps): ReactElement {

    return (
      <label styleName="root" {...rest}>
        {children}
      </label>
    );

  }
);