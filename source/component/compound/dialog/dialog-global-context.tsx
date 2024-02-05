//

import {Dispatch, ReactElement, ReactNode, SetStateAction, cloneElement, createContext, useMemo, useState} from "react";
import {noop} from "ts-essentials";
import {create} from "/source/component/create";


export type DialogGlobalContextValue = {
  setOpen: Dispatch<SetStateAction<boolean>>,
  setDialogElement: Dispatch<SetStateAction<ReactElement | null>>
};

export const dialogGlobalContext = createContext<DialogGlobalContextValue>({
  setOpen: noop,
  setDialogElement: noop
});
export const DialogGlobalContextProvider = dialogGlobalContext["Provider"];


export const DialogGlobalProvider = create(
  null, "DialogGlobalProvider",
  function ({
    children
  }: {
    children: ReactNode
  }): ReactElement {

    const [open, setOpen] = useState(false);
    const [dialogElement, setDialogElement] = useState<ReactElement | null>(null);

    return (
      <DialogGlobalContextProvider value={useMemo(() => ({setOpen, setDialogElement}), [setOpen, setDialogElement])}>
        {(dialogElement !== null) && cloneElement(dialogElement, {open, onOpenSet: setOpen})}
        {children}
      </DialogGlobalContextProvider>
    );

  }
);