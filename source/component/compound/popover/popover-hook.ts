//

import {
  FloatingContext,
  safePolygon,
  useClick,
  useDismiss,
  useFocus,
  useHover,
  useInteractions,
  useRole
} from "@floating-ui/react";


type PopoverInteractionSpec = Omit<ReturnType<typeof useInteractions>, "getItemProps">;

export function usePopoverInteraction(context: FloatingContext, triggerType: "click" | "focus" | "hover", triggerRest: number | null): PopoverInteractionSpec {
  const click = useClick(context, {enabled: triggerType === "click"});
  const focus = useFocus(context, {enabled: triggerType === "focus"});
  const hover = useHover(context, {enabled: triggerType === "hover", restMs: triggerRest ?? 0, handleClose: safePolygon()});
  const dismiss = useDismiss(context);
  const role = useRole(context, {role: "tooltip"});
  const {getReferenceProps, getFloatingProps} = useInteractions([click, focus, hover, dismiss, role]);
  return {
    getReferenceProps,
    getFloatingProps
  };
}