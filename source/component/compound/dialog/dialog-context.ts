//

import {createContext} from "react";
import {LeveledColorScheme} from "/source/module";


export type DialogContextValue = {
  scheme: LeveledColorScheme
};

export const dialogContext = createContext<DialogContextValue>({
  scheme: "primary"
});
export const DialogContextProvider = dialogContext["Provider"];