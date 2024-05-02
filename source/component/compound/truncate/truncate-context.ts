//

import {RefObject, createContext} from "react";


export type TruncateContextValue = {
  ref: RefObject<HTMLDivElement>,
  needTruncation: boolean,
  show: boolean,
  scrollHeight: number,
  handleClick: () => void
};

export const truncateContext = createContext<TruncateContextValue>({
  ref: {current: null},
  needTruncation: false,
  show: false,
  scrollHeight: 0,
  handleClick: () => null
});
export const TruncateContextProvider = truncateContext["Provider"];