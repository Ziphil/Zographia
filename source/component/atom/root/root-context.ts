//

import {createContext} from "react";
import {Device} from "/source/module";


export type RootContextValue = {
  device: Device
};

export const rootContext = createContext<RootContextValue>({
  device: "desktop"
});
export const RootContextProvider = rootContext["Provider"];