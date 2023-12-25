//

import {createContext} from "react";
import {noop} from "ts-essentials";


export type ModalContextValue = {
  onOpenSet: (open: boolean) => unknown
};

export const modalContext = createContext<ModalContextValue>({
  onOpenSet: noop
});
export const ModalContextProvider = modalContext["Provider"];