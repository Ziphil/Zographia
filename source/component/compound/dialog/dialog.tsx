//

import {ReactElement} from "react";
import {Modal} from "/source/component/atom/modal";
import {create} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const Dialog = create(
  require("./dialog.scss"), "Dialog",
  function ({
    height = "fit",
    open,
    defaultOpen = false,
    onOpenSet,
    children,
    ...rest
  }: {
    height?: "fit" | "full",
    open?: boolean,
    defaultOpen?: boolean,
    onOpenSet?: (open: boolean) => unknown,
    children: ReactElement,
    className?: string
  } & AdditionalProps): ReactElement {

    return (
      <Modal styleName="root" open={open} defaultOpen={defaultOpen} onOpenSet={onOpenSet} {...data({height})} {...rest}>
        {children}
      </Modal>
    );

  }
);
