//

import {ReactElement} from "react";
import {Modal} from "/source/component/atom/modal";
import {create} from "/source/component/create";
import {LeveledColorScheme} from "/source/module";
import {AdditionalProps, data} from "/source/module/data";


export const Dialog = create(
  require("./dialog.scss"), "Dialog",
  function ({
    open,
    defaultOpen = false,
    scheme,
    onOpenSet,
    children,
    ...rest
  }: {
    open?: boolean,
    defaultOpen?: boolean,
    scheme?: LeveledColorScheme,
    onOpenSet?: (open: boolean) => unknown,
    children: ReactElement,
    className?: string
  } & AdditionalProps): ReactElement {

    return (
      <Modal styleName="root" open={open} defaultOpen={defaultOpen} onOpenSet={onOpenSet} {...data({scheme})} {...rest}>
        {children}
      </Modal>
    );

  }
);
