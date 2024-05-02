//

import {RefObject, createContext} from "react";


export type CollapsibleContextValue = {
  ref: RefObject<HTMLDivElement>,
  needTruncation: boolean,
  show: boolean,
  scrollHeight: number,
  handleClick: () => void
};

export const collapsibleContext = createContext<CollapsibleContextValue>({
  ref: {current: null},
  needTruncation: false,
  show: false,
  scrollHeight: 0,
  handleClick: () => null
});
export const CollapsibleContextProvider = collapsibleContext["Provider"];