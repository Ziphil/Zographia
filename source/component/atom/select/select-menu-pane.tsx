/* eslint-disable react/jsx-closing-bracket-location */

import {ReactElement, ReactNode, useMemo} from "react";
import {MenuContextProvider} from "/source/component/compound/menu/menu-context";
import {MenuPane} from "/source/component/compound/menu/menu-pane";
import {createWithRef} from "/source/component/create";
import {SelectFloatingSpec, SelectInteractionSpec} from "./select-hook";


export const SelectMenuPane = createWithRef(
  null, "SelectMenuPane",
  function ({
    floatingSpec,
    interactionSpec,
    onFocusSet,
    children
  }: {
    floatingSpec: SelectFloatingSpec,
    interactionSpec: SelectInteractionSpec,
    onFocusSet: (focus: boolean) => unknown,
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
        combobox={false}
        style={floatingStyles}
        onFocusSet={onFocusSet}
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
