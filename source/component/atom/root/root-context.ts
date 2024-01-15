//

import {createContext} from "react";


export type RootContextValue = {
  smartphone: boolean
};

export const rootContext = createContext<RootContextValue>({
  smartphone: false
});
export const RootContextProvider = rootContext["Provider"];