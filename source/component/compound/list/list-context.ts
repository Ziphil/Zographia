//

import {createContext} from "react";
import {noop} from "ts-essentials";


export type ListContextValue = {
  items: Array<any> | undefined,
  size: number,
  hitSize?: number,
  page?: number,
  onPageSet?: (page: number) => void,
  innerPage: number,
  onInnerPageSet: (innerPage: number) => void
};

export const listContext = createContext<ListContextValue>({
  items: undefined,
  size: 0,
  innerPage: 0,
  onInnerPageSet: noop
});
export const ListContextProvider = listContext["Provider"];