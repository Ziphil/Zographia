//

import {ReactElement, useMemo} from "react";
import {Modal} from "/source/component/atom/modal";
import {create} from "/source/component/create";
import {LeveledColorScheme} from "/source/module";
import {AdditionalProps} from "/source/module/data";
import {AlertContextProvider} from "./alert-context";


export const Alert = create(
  require("./alert.scss"), "Alert",
  function ({
    open,
    defaultOpen = false,
    scheme = "primary",
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
      <AlertContextProvider value={useMemo(() => ({scheme}), [scheme])}>
        <Modal styleName="root" open={open} defaultOpen={defaultOpen} onOpenSet={onOpenSet} {...rest}>
          {children}
        </Modal>
      </AlertContextProvider>
    );

  }
);
