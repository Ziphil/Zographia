//

import {ReactElement, ReactNode, useMemo} from "react";
import {MenuContextProvider} from "/source/component/compound/menu/menu-context";
import {MenuPane} from "/source/component/compound/menu/menu-pane";
import {createWithRef} from "/source/component/create";
import {InputFloatingSpec, InputInteractionSpec} from "./input-hook";


export const InputMenuPane = createWithRef(
  null, "InputMenuPane",
  function ({
    floatingSpec,
    interactionSpec,
    children
  }: {
    floatingSpec: InputFloatingSpec,
    interactionSpec: InputInteractionSpec,
    children: ReactNode
  }): ReactElement {

    const {
      refs,
      floatingStyles,
      context,
      mounted,
      status,
      open,
      setOpen
    } = floatingSpec;
    const {
      listRef,
      activeIndex,
      getFloatingProps,
      getItemProps
    } = interactionSpec;

    return (
      <MenuPane
        open={open}
        mounted={mounted}
        status={status}
        context={context}
        combobox={true}
        style={floatingStyles}
        ref={refs.setFloating}
        {...getFloatingProps()}
      >
        <MenuContextProvider value={useMemo(() => ({setOpen, listRef, activeIndex, getItemProps}), [setOpen, listRef, activeIndex, getItemProps])}>
          {children}
        </MenuContextProvider>
      </MenuPane>
    );

  }
);