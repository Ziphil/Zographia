//

import {ReactElement} from "react";
import {Modal} from "/source/component/atom/modal";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const Dialog = create(
  require("./dialog.scss"), "Dialog",
  function ({
    open,
    defaultOpen = false,
    onOpenSet,
    children,
    ...rest
  }: {
    open?: boolean,
    defaultOpen?: boolean,
    onOpenSet?: (open: boolean) => unknown,
    children: ReactElement,
    className?: string
  } & AdditionalProps): ReactElement {

    return (
      <Modal styleName="root" open={open} defaultOpen={defaultOpen} onOpenSet={onOpenSet} {...rest}>
        {children}
      </Modal>
    );

  }
);
