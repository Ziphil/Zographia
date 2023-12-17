//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import SimpleBarCore from "simplebar-core";
import SimpleBar from "simplebar-react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const Scroll = createWithRef(
  require("./scroll.scss"), "Scroll",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<SimpleBarCore>
  } & AdditionalProps): ReactElement {

    return (
      <SimpleBar styleName="root" {...rest}>
        {children}
      </SimpleBar>
    );

  }
);