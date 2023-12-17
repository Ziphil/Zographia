//

import {Dispatch, HTMLProps, MutableRefObject, SetStateAction, createContext} from "react";


export type MenuContextValue = {
  setOpen: Dispatch<SetStateAction<boolean>>,
  listRef: MutableRefObject<Array<HTMLElement | null>>,
  activeIndex: number | null,
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
};

export const menuContext = createContext<MenuContextValue>({
  setOpen: () => null,
  listRef: {current: []},
  activeIndex: null,
  getItemProps: () => ({})
});
export const MenuContextProvider = menuContext["Provider"];