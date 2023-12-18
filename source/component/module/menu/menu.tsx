//

import {FloatingContext, Placement, useClick, useDismiss, useFloating, useFocus, useHover, useInteractions, useListNavigation, useRole, useTransitionStatus} from "@floating-ui/react";
import {Children, Fragment, MutableRefObject, ReactElement, ReactNode, cloneElement, useRef, useState} from "react";
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


type MenuInteractionSpec = ReturnType<typeof useInteractions> & {
  listRef: MutableRefObject<Array<HTMLElement>>,
  activeIndex: number | null
};

function useMenuInteraction(context: FloatingContext, triggerType: "click" | "focus" | "hover"): MenuInteractionSpec {
  const listRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const click = useClick(context, {enabled: triggerType === "click"});
  const focus = useFocus(context, {enabled: triggerType === "focus"});
  const hover = useHover(context, {enabled: triggerType === "hover"});
  const dismiss = useDismiss(context);
  const listNavigation = useListNavigation(context, {listRef, activeIndex, onNavigate: setActiveIndex});
  const role = useRole(context, {role: "menu"});
  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([click, focus, hover, dismiss, listNavigation, role]);
  return {
    listRef,
    activeIndex,
    getReferenceProps,
    getFloatingProps,
    getItemProps
  };
}

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