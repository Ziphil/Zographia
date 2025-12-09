//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const CheckableCard = createWithRef(
  require("./checkable-card.scss"), "CheckableCard",
  function ({
    label = true,
    children,
    ref,
    ...rest
  }: {
    label?: boolean,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = (label) ? "label" : "div";

    return (
      <Is styleName="root" ref={ref as any} {...rest}>
        {children}
      </Is>
    );

  }
);