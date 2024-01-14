//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const Card = createWithRef(
  require("./card.scss"), "Card",
  function ({
    is = "article",
    padding = "normal",
    children,
    ...rest
  }: {
    is?: string,
    padding?: "normal" | "wide",
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...data({padding})} {...rest}>
        {children}
      </Is>
    );

  }
);
