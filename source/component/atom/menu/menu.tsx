//

import {Placement, useClick, useDismiss, useFloating, useInteractions, useListNavigation, useRole, useTransitionStatus} from "@floating-ui/react";
import {Children, ReactElement, ReactNode, cloneElement, useMemo, useRef, useState} from "react";
import {isElement} from "react-is";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";
import {MenuContextProvider} from "./menu-context";
import {MenuItem} from "./menu-item";
import {MenuList} from "./menu-list";


export const Menu = create(
  require("./menu.scss"), "Menu",
  function ({
    trigger,
    placement = "bottom-start",
    children,
    className
  }: {
    trigger?: ReactElement,
    placement?: Placement,
    children?: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    const [isOpen, setOpen] = useState(false);
    const listRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const {refs, floatingStyles, context} = useFloating({open: isOpen, onOpenChange: setOpen, placement});
    const {isMounted, status} = useTransitionStatus(context, {duration: 100});
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const listNavigation = useListNavigation(context, {listRef, activeIndex, onNavigate: setActiveIndex});
    const role = useRole(context, {role: "menu"});
    const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([click, dismiss, listNavigation, role]);

    const contextValue = useMemo(() => ({
      setOpen,
      listRef,
      activeIndex,
      getItemProps
    }), [
      setOpen,
      listRef,
      activeIndex,
      getItemProps
    ]);

    return (
      <>
        {trigger !== undefined && (
          cloneElement(trigger, {ref: refs.setReference, ...getReferenceProps()})
        )}
        <MenuList
          className={className}
          open={isOpen}
          mounted={isMounted}
          status={status}
          context={context}
          style={floatingStyles}
          ref={refs.setFloating}
          {...getFloatingProps()}
        >
          <MenuContextProvider value={contextValue}>
            {transformChildren(children)}
          </MenuContextProvider>
        </MenuList>
      </>
    );

  }
);

const transformChildren = (children: ReactNode): Array<ReactElement> | null | undefined => {
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