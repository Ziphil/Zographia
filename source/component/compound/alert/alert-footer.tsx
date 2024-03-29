//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const AlertFooter = createWithRef(
  require("./alert-footer.scss"), "AlertFooter",
  function ({
    children,
    ...rest
  }: {
    children: ReactNode,
    className?: string,
    ref?: Ref<HTMLElement>
  } & AdditionalProps): ReactElement {

    return (
      <footer styleName="root" {...rest}>
        {children}
      </footer>
    );

  }
);
