//

import {ForwardedRef, ReactElement} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const TagIconbag = createWithRef(
  require("./tag-iconbag.scss"), "TagIconbag",
  function ({
    children,
    ...rest
  }: {
    children: ReactElement,
    className?: string,
    ref: ForwardedRef<HTMLSpanElement>
  } & AdditionalProps): ReactElement {

    return (
      <span styleName="root" {...rest}>
        {children}
      </span>
    );

  }
);