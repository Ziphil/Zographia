//

import {Dispatch, ReactElement, ReactNode, SetStateAction, cloneElement, createContext, useMemo, useState} from "react";
import {noop} from "ts-essentials";
import {create} from "/source/component/create";


export type AlertGlobalContextValue = {
  setOpen: Dispatch<SetStateAction<boolean>>,
  setAlertElement: Dispatch<SetStateAction<ReactElement | null>>
};

export const alertGlobalContext = createContext<AlertGlobalContextValue>({
  setOpen: noop,
  setAlertElement: noop
});
export const AlertGlobalContextProvider = alertGlobalContext["Provider"];


export const AlertGlobalProvider = create(
  null, "AlertGlobalProvider",
  function ({
    children
  }: {
    children: ReactNode
  }): ReactElement {

    const [open, setOpen] = useState(false);
    const [alertElement, setAlertElement] = useState<ReactElement | null>(null);

    return (
      <AlertGlobalContextProvider value={useMemo(() => ({setOpen, setAlertElement}), [setOpen, setAlertElement])}>
        {(alertElement !== null) && cloneElement(alertElement, {open, onOpenSet: setOpen})}
        {children}
      </AlertGlobalContextProvider>
    );

  }
);