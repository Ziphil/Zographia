//

import {MouseEvent, ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const DialogOutsideButton = createWithRef(
  require("./dialog-outside-button.scss"), "DialogOutsideButton",
  function ({
    onClick,
    children,
    ...rest
  }: {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref?: Ref<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    return (
      <button styleName="root" type="button" onClick={onClick} {...rest}>
        {children}
      </button>
    );

  }
);
