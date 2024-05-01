//

import {Dispatch, RefObject, SetStateAction, createContext} from "react";


export type TruncateContextValue = {
  ref: RefObject<HTMLDivElement>,
  needTruncation: boolean,
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>,
  scrollHeight: number,
  setScrollHeight: Dispatch<SetStateAction<number>>
};

export const truncateContext = createContext<TruncateContextValue>({
  ref: {current: null},
  needTruncation: false,
  show: false,
  setShow: () => null,
  scrollHeight: 0,
  setScrollHeight: () => null
});
export const TruncateContextProvider = truncateContext["Provider"];