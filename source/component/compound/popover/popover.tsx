//

import {Placement, autoUpdate, flip as flipMiddleware, inline as inlineMiddleware, useFloating, useTransitionStatus} from "@floating-ui/react";
import {Fragment, ReactElement, ReactNode, cloneElement, useState} from "react";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";
import {usePopoverInteraction} from "./popover-hook";
import {PopoverPane} from "./popover-pane";


export const Popover = create(
  require("./popover.scss"), "Popover",
  function ({
    trigger,
    triggerType = "click",
    triggerRest = null,
    placement = "bottom-start",
    inline = false,
    children,
    className
  }: {
    trigger?: ReactElement,
    triggerType?: "click" | "focus" | "hover",
    triggerRest?: number | null,
    placement?: Placement,
    inline?: boolean,
    children?: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    const [open, setOpen] = useState(false);

    const {refs, floatingStyles, context} = useFloating({open, onOpenChange: setOpen, placement, whileElementsMounted: autoUpdate, middleware: [flipMiddleware(), inline && inlineMiddleware()]});
    const {isMounted: mounted, status} = useTransitionStatus(context, {duration: 100});
    const {getReferenceProps, getFloatingProps} = usePopoverInteraction(context, triggerType, triggerRest);

    return (
      <Fragment>
        {(trigger !== undefined) && (
          cloneElement(trigger, {ref: refs.setReference, ...getReferenceProps()})
        )}
        <PopoverPane
          className={className}
          open={open}
          mounted={mounted}
          status={status}
          context={context}
          style={floatingStyles}
          ref={refs.setFloating}
          {...getFloatingProps()}
        >
          {children}
        </PopoverPane>
      </Fragment>
    );

  }
);