import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ControlContainer = createWithRef(
  require("./control-container.scss"), "ControlContainer",
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