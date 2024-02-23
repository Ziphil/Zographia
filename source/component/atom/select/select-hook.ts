//

import {
  FloatingContext,
  autoUpdate,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTransitionStatus
} from "@floating-ui/react";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState
} from "react";
import {fitWidth} from "/source/module/floating";


export type SelectFloatingSpec = Pick<ReturnType<typeof useFloating>, "refs" | "floatingStyles" | "context"> & {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  mounted: boolean,
  status: "unmounted" | "initial" | "open" | "close"
};

export function useSelectFloating(): SelectFloatingSpec {
  const [open, setOpen] = useState(false);
  const {refs, floatingStyles, context} = useFloating({open, onOpenChange: setOpen, placement: "bottom-start", whileElementsMounted: autoUpdate, middleware: [fitWidth()]});
  const {isMounted: mounted, status} = useTransitionStatus(context, {duration: 100});
  return {
    refs,
    floatingStyles,
    context,
    mounted,
    status,
    open,
    setOpen
  };
}

export type SelectInteractionSpec = ReturnType<typeof useInteractions> & {
  listRef: MutableRefObject<Array<HTMLElement>>,
  activeIndex: number | null,
  setActiveIndex: Dispatch<SetStateAction<number | null>>
};

export function useSelectInteraction(context: FloatingContext): SelectInteractionSpec {
  const listRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const listNavigation = useListNavigation(context, {listRef, activeIndex, onNavigate: setActiveIndex});
  const role = useRole(context, {role: "listbox"});
  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([click, dismiss, listNavigation, role]);
  return {
    listRef,
    activeIndex,
    setActiveIndex,
    getReferenceProps,
    getFloatingProps,
    getItemProps
  };
}