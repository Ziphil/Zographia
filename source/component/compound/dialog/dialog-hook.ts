//

import {ReactElement, useCallback, useContext} from "react";
import {dialogGlobalContext} from "./dialog-global-context";


export type OpenDialog = (render: (close: () => void) => ReactElement) => void;

export function useDialog(): OpenDialog {
  const {setDialogElement, setOpen} = useContext(dialogGlobalContext);
  const close = useCallback(function (): void {
    setOpen(false);
  }, [setOpen]);
  const openDialog = useCallback(function (render: (close: () => void) => ReactElement): void {
    setDialogElement(render(close));
    setOpen(true);
  }, [setOpen, setDialogElement, close]);
  return openDialog;
};