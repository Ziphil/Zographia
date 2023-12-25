/* eslint-disable quote-props, @typescript-eslint/naming-convention */

import {
  FloatingFocusManager,
  FloatingOverlay,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  useTransitionStatus
} from "@floating-ui/react";
import {ReactElement, cloneElement, useState} from "react";
import {create} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";
import {ModalContextProvider} from "./modal-context";


export const Modal = create(
  require("./modal.scss"), "Modal",
  function ({
    open,
    defaultOpen = false,
    onOpenSet,
    children,
    ...rest
  }: {
    open?: boolean,
    defaultOpen?: boolean,
    onOpenSet?: (open: boolean) => unknown,
    children: ReactElement,
    className?: string
  } & AdditionalProps): ReactElement | null {

    const [innerOpen, setInnerOpen] = useState(defaultOpen);
    const actualOpen = (open !== undefined) ? open : innerOpen;
    const actualOnOpenSet = (onOpenSet !== undefined) ? onOpenSet : setInnerOpen;

    const {refs, context} = useFloating({open: actualOpen, onOpenChange: actualOnOpenSet});
    const {isMounted, status} = useTransitionStatus(context, {duration: 100});
    const dismiss = useDismiss(context, {outsidePressEvent: "mousedown"});
    const role = useRole(context);
    const {getFloatingProps} = useInteractions([dismiss, role]);

    return (isMounted) ? (
      <FloatingOverlay styleName="root" {...data({status})}>
        <FloatingFocusManager context={context}>
          <ModalContextProvider value={{onOpenSet: actualOnOpenSet}}>
            {cloneElement(children, {ref: refs.setFloating, ...getFloatingProps(rest)})}
          </ModalContextProvider>
        </FloatingFocusManager>
      </FloatingOverlay>
    ) : null;

  }
);
