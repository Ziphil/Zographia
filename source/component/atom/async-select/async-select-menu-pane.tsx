/* eslint-disable react/jsx-closing-bracket-location */

import {ReactElement, ReactNode, useMemo} from "react";
import {MenuContextProvider} from "/source/component/compound/menu/menu-context";
import {MenuPane} from "/source/component/compound/menu/menu-pane";
import {createWithRef} from "/source/component/create";
import {AsyncSelectContextProvider} from "./async-select-context";
import {AsyncSelectFloatingSpec, AsyncSelectInteractionSpec} from "./async-select-hook";


export const AsyncSelectMenuPane = createWithRef(
  null, "AsyncSelectMenuPane",
  function ({
    updateValue,
    floatingSpec,
    interactionSpec,
    children
  }: {
    updateValue: (value: any) => unknown,
    floatingSpec: AsyncSelectFloatingSpec,
    interactionSpec: AsyncSelectInteractionSpec,
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
        <MenuContextProvider value={useMemo(
          () => ({setOpen, listRef, activeIndex, getItemProps}),
          [setOpen, listRef, activeIndex, getItemProps]
        )}>
          <AsyncSelectContextProvider value={useMemo(() => ({updateValue}), [updateValue])}>
            {children}
          </AsyncSelectContextProvider>
        </MenuContextProvider>
      </MenuPane>
    );

  }
);
