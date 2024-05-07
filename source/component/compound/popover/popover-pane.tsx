//

import {FloatingContext, FloatingPortal} from "@floating-ui/react";
import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const PopoverPane = createWithRef(
  require("./popover-pane.scss"), "PopoverPane",
  function ({
    open,
    mounted,
    status,
    context,
    usePortal = true,
    children,
    ...rest
  }: {
    open: boolean,
    mounted: boolean,
    status: "unmounted" | "initial" | "open" | "close",
    context: FloatingContext,
    usePortal?: boolean,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLDivElement>
  } & AdditionalProps): ReactElement | null {

    return (mounted) ? (usePortal) ? (
      <FloatingPortal>
        <div styleName="root" {...data({status})} {...rest}>
          {children}
        </div>
      </FloatingPortal>
    ) : (
      <div styleName="root" {...data({status})} {...rest}>
        {children}
      </div>
    ) : null;

  }
);