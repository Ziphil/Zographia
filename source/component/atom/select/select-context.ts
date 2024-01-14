//

import {createContext} from "react";
import {noop} from "ts-essentials";


export type SelectContextValue = {
  updateValue: (value: any) => void
};

export const selectContext = createContext<SelectContextValue>({
  updateValue: noop
});
export const SelectContextProvider = selectContext["Provider"];