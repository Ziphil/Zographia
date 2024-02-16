//

import {ReactElement, useCallback, useContext} from "react";
import {alertGlobalContext} from "./alert-global-context";


export type OpenAlert = (render: (close: () => void) => ReactElement) => void;

export function useAlert(): OpenAlert {
  const {setAlertElement, setOpen} = useContext(alertGlobalContext);
  const close = useCallback(function (): void {
    setOpen(false);
  }, [setOpen]);
  const openAlert = useCallback(function (render: (close: () => void) => ReactElement): void {
    setAlertElement(render(close));
    setOpen(true);
  }, [setOpen, setAlertElement, close]);
  return openAlert;
};