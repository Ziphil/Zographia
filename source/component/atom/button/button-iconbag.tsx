//

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ButtonIconbag = create(
  require("./button-iconbag.scss"), "ButtonIconbag",
  function ({
    children,
    ...rest
  }: {
    children: ReactElement,
    className?: string
  } & AdditionalProps): ReactElement {

    return (
      <span styleName="root" {...rest}>
        {children}
      </span>
    );

  }
);