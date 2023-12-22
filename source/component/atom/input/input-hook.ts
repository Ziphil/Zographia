//

import {
  FloatingContext,
  useDismiss,
  useInteractions,
  useListNavigation,
  useRole
} from "@floating-ui/react";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState
} from "react";


type InputInteractionSpec = ReturnType<typeof useInteractions> & {
  listRef: MutableRefObject<Array<HTMLElement>>,
  activeIndex: number | null,
  setActiveIndex: Dispatch<SetStateAction<number | null>>
};

export function useInputInteraction(context: FloatingContext): InputInteractionSpec {
  const listRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dismiss = useDismiss(context);
  const listNavigation = useListNavigation(context, {listRef, activeIndex, onNavigate: setActiveIndex, virtual: true});
  const role = useRole(context, {role: "listbox"});
  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([dismiss, listNavigation, role]);
  return {
    listRef,
    activeIndex,
    setActiveIndex,
    getReferenceProps,
    getFloatingProps,
    getItemProps
  };
}