//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/sharp-regular-svg-icons";
import {MouseEvent, ReactElement, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const GrabbablePaneButton = createWithRef(
  require("./grabbable-pane-button.scss"), "GrabbablePaneButton",
  function ({
    position = "top",
    disabled,
    onClick,
    ...rest
  }: {
    position: "top" | "bottom",
    disabled?: boolean,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    className?: string,
    ref: Ref<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    return (
      <button styleName="root" type="button" disabled={disabled} onClick={onClick} {...rest}>
        <FontAwesomeIcon icon={(position === "top") ? faAngleUp : faAngleDown}/>
      </button>
    );

  }
);
