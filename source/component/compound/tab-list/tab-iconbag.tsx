//

import {ForwardedRef, ReactElement} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const TabIconbag = createWithRef(
  require("./tab-iconbag.scss"), "TabIconbag",
  function ({
    children,
    ...rest
  }: {
    children: ReactElement,
    className?: string,
    id?: string,
    ref: ForwardedRef<HTMLSpanElement>
  } & AdditionalProps): ReactElement {

    return (
      <span styleName="root" {...rest}>
        {children}
      </span>
    );

  }
);