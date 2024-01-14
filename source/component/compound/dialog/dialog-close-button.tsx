//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/sharp-regular-svg-icons";
import {ReactElement, Ref, useCallback, useContext} from "react";
import {modalContext} from "/source/component/atom/modal/modal-context";
import {createWithRef} from "/source/component/create";
import {useTrans} from "/source/hook/translation";
import {AdditionalProps} from "/source/module/data";


export const DialogCloseButton = createWithRef(
  require("./dialog-close-button.scss"), "DialogCloseButton",
  function ({
    ...rest
  }: {
    className?: string,
    ref?: Ref<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    const {trans} = useTrans("dialog");

    const {onOpenSet} = useContext(modalContext);

    const handleClick = useCallback(function (): void {
      onOpenSet(false);
    }, [onOpenSet]);

    return (
      <button styleName="root" type="button" onClick={handleClick} {...rest}>
        <FontAwesomeIcon styleName="icon" icon={faClose}/>
        {trans("close")}
      </button>
    );

  }
);
