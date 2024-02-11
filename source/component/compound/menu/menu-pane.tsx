//

import {FloatingContext, FloatingFocusManager, FloatingPortal} from "@floating-ui/react";
import {CSSProperties, ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const MenuPane = createWithRef(
  require("./menu-pane.scss"), "MenuPane",
  function ({
    open,
    mounted,
    status,
    context,
    combobox = false,
    usePortal = true,
    children,
    ...rest
  }: {
    open: boolean,
    mounted: boolean,
    status: "unmounted" | "initial" | "open" | "close",
    context: FloatingContext,
    combobox?: boolean,
    usePortal?: boolean,
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref: ForwardedRef<HTMLDivElement>
  } & AdditionalProps): ReactElement | null {

    const initialFocus = (combobox) ? -1 : undefined;

    return (mounted) ? (usePortal) ? (
      <FloatingPortal>
        <FloatingFocusManager context={context} modal={false} visuallyHiddenDismiss={true} initialFocus={initialFocus}>
          <div styleName="root" {...data({status})} {...rest}>
            {children}
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    ) : (
      <FloatingFocusManager context={context} modal={false} visuallyHiddenDismiss={true} initialFocus={initialFocus}>
        <div styleName="root" {...data({status})} {...rest}>
          {children}
        </div>
      </FloatingFocusManager>
    ) : null;

  }
);