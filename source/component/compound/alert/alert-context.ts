//

import {createContext} from "react";
import {LeveledColorScheme} from "/source/module";


export type AlertContextValue = {
  scheme: LeveledColorScheme
};

export const alertContext = createContext<AlertContextValue>({
  scheme: "primary"
});
export const AlertContextProvider = alertContext["Provider"];