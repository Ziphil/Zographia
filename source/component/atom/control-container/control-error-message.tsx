//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {MultiLineText} from "/source/component/atom/multi-line-text";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ControlErrorMessage = createWithRef(
  require("./control-error-message.scss"), "ControlErrorMessage",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLLabelElement>
  } & AdditionalProps): ReactElement {

    return (
      <MultiLineText styleName="root" is="p" lineHeight="short" {...rest}>
        {children}
      </MultiLineText>
    );

  }
);