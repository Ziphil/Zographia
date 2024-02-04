//

import {createContext} from "react";
import {ColorDefinitions, DEFAULT_COLOR_DEFINITIONS, DEFAULT_STYLE_DEFINITIONS, Device, StyleDefinitions} from "/source/module";


export type RootContextValue = {
  device: Device,
  colorDefinitions: ColorDefinitions,
  styleDefinitions: StyleDefinitions
};

export const rootContext = createContext<RootContextValue>({
  device: "desktop",
  colorDefinitions: DEFAULT_COLOR_DEFINITIONS,
  styleDefinitions: DEFAULT_STYLE_DEFINITIONS
});
export const RootContextProvider = rootContext["Provider"];