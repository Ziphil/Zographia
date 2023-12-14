//

import {ReactElement} from "react";
import {create} from "/source/component/create";
import {useTrans} from "/source/hook/translation";
import {AdditionalProps} from "/source/module/data";


export const Button = create(
  require("./button.scss"), "Button",
  function ({
    foo,
    bar = 3,
    onClick,
    ...rest
  }: {
    foo: string,
    bar?: number,
    onClick?: () => void
  } & AdditionalProps): ReactElement {

    const {trans} = useTrans("test");

    return (
      <div styleName="root" onClick={onClick} {...rest}>
        Hello! {foo} & {bar}, {trans("hello")}
      </div>
    );

  }
);