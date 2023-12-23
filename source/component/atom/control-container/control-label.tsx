import {ForwardedRef, ReactElement, ReactNode} from "react";
import {SingleLineText} from "/source/component/atom/single-line-text";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ControlLabel = createWithRef(
  require("./control-label.scss"), "ControlLabel",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLLabelElement>
  } & AdditionalProps): ReactElement {

    return (
      <SingleLineText styleName="root" is="div" {...rest}>
        {children}
      </SingleLineText>
    );

  }
);