//

import {createContext} from "react";


export type RadioGroupContextValue = {
  name: string,
  value?: string | null,
  onSet?: (value: string) => unknown
};

export const radioGroupContext = createContext<RadioGroupContextValue | undefined>(undefined);
export const RadioGroupContextProvider = radioGroupContext["Provider"];