//

import {createContext} from "react";


export type TabListContextValue = {
  value?: string,
  onSet?: (value: string) => unknown
};

export const tabListContext = createContext<TabListContextValue>({});
export const TabListContextProvider = tabListContext["Provider"];