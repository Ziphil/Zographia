//

import {ReactElement} from "react";
import {MenuContextProvider} from "/source/component/compound/menu/menu-context";
import {MenuPane} from "/source/component/compound/menu/menu-pane";
import {createWithRef} from "/source/component/create";
import type {SuggestionSpec} from "./input";
import {InputFloatingSpec, InputInteractionSpec} from "./input-hook";
import {InputMenuItem} from "./input-menu-item";


export const InputMenuPane = createWithRef(
  null, "InputMenuPane",
  function ({
    suggestionSpecs,
    updateValue,
    floatingSpec,
    interactionSpec
  }: {
    suggestionSpecs: Array<SuggestionSpec>,
    updateValue: (value: string) => unknown,
    floatingSpec: InputFloatingSpec,
    interactionSpec: InputInteractionSpec
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
        <MenuContextProvider value={{setOpen, listRef, activeIndex, getItemProps}}>
          {suggestionSpecs.map((spec, index) => (
            <InputMenuItem key={index} index={index} spec={spec} updateValue={updateValue}/>
          ))}
        </MenuContextProvider>
      </MenuPane>
    );

  }
);