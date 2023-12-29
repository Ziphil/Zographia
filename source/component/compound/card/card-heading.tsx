//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const CardHeading = createWithRef(
  require("./card-heading.scss"), "CardHeading",
  function ({
    is = "h3",
    children,
    ...rest
  }: {
    is?: string,
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...rest}>
        {children}
      </Is>
    );

  }
);
