//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/sharp-regular-svg-icons";
import {ForwardedRef, KeyboardEvent, MouseEvent, PointerEvent, ReactElement} from "react";
import {createWithRef} from "/source/component/create";
import {useTrans} from "/source/hook/translation";
import {AdditionalProps, aria} from "/source/module/data";


export const TagCloseButton = createWithRef(
  require("./tag-close-button.scss"), "TagCloseButton",
  function ({
    onClick,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onPointerDown,
    ...rest
  }: {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => unknown,
    onKeyUp?: (event: KeyboardEvent<HTMLButtonElement>) => unknown,
    onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    onPointerDown?: (event: PointerEvent<HTMLButtonElement>) => unknown,
    className?: string,
    ref: ForwardedRef<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    const {trans} = useTrans("tag");

    return (
      <button
        styleName="root"
        tabIndex={-1}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onMouseDown={onMouseDown}
        onPointerDown={onPointerDown}
        title={trans("close")}
        {...aria({label: trans("close")})}
        {...rest}
      >
        <FontAwesomeIcon icon={faClose}/>
      </button>
    );

  }
);