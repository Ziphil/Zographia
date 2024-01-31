//

import {createContext} from "react";
import {ColorDefinitions, DEFAULT_COLOR_DEFINITIONS, DEFAULT_THEME, Device, Theme} from "/source/module";


export type RootContextValue = {
  device: Device,
  colorDefinitions: ColorDefinitions,
  theme: Theme
};

export const rootContext = createContext<RootContextValue>({
  device: "desktop",
  colorDefinitions: DEFAULT_COLOR_DEFINITIONS,
  theme: DEFAULT_THEME
});
export const RootContextProvider = rootContext["Provider"];