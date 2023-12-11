//

import {ReactElement} from "react";
import {create} from "/source/component/create";


export const Button = create(
  require("./button.scss"), "Button",
  function ({
    foo,
    bar = 3,
    onClick
  }: {
    foo: string,
    bar?: number,
    onClick?: () => void
  }): ReactElement {

    return (
      <div styleName="root" onClick={onClick}>
        Hello! {foo} & {bar}
      </div>
    );

  }
);