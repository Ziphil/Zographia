//

import {Placement, useFloating, useTransitionStatus} from "@floating-ui/react";
import {Children, Fragment, ReactElement, ReactNode, cloneElement, useState} from "react";
import {isElement} from "react-is";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";
import {MenuContextProvider} from "./menu-context";
import {useMenuInteraction} from "./menu-hook";
import {MenuItem} from "./menu-item";
import {MenuList} from "./menu-list";


export const Menu = create(
  require("./menu.scss"), "Menu",
  function ({
    trigger,
    triggerType = "click",
    placement = "bottom-start",
    children,
    className
  }: {
    trigger?: ReactElement,
    triggerType?: "click" | "focus" | "hover",
    placement?: Placement,
    children?: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    const [open, setOpen] = useState(false);

    const {refs, floatingStyles, context} = useFloating({open, onOpenChange: setOpen, placement});
    const {isMounted, status} = useTransitionStatus(context, {duration: 100});
    const {
      listRef,
      activeIndex,
      getReferenceProps,
      getFloatingProps,
      getItemProps
    } = useMenuInteraction(context, triggerType);

    return (
      <Fragment>
        {trigger !== undefined && (
          cloneElement(trigger, {ref: refs.setReference, ...getReferenceProps()})
        )}
        <MenuList
          className={className}
          open={open}
          mounted={isMounted}
          status={status}
          context={context}
          style={floatingStyles}
          ref={refs.setFloating}
          {...getFloatingProps()}
        >
          <MenuContextProvider value={{setOpen, listRef, activeIndex, getItemProps}}>
            {transformChildren(children)}
          </MenuContextProvider>
        </MenuList>
      </Fragment>
    );

  }
);


function transformChildren(children: ReactNode): Array<ReactElement> | null | undefined {
  let index = -1;
  const nextChildren = Children.map(children, (child) => {
    if (isElement(child)) {
      if (child.type === MenuItem) {
        index ++;
        return cloneElement(child, {index});
      } else {
        return child;
      }
    } else {
      return undefined;
    }
  });
  return nextChildren;
};