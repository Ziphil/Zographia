//

import {FloatingContext, FloatingFocusManager} from "@floating-ui/react";
import {CSSProperties, ForwardedRef, ReactElement, ReactNode} from "react";
import {Scroll} from "/source/component/atom/scroll";
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
    children,
    ...rest
  }: {
    open: boolean,
    mounted: boolean,
    status: "unmounted" | "initial" | "open" | "close",
    context: FloatingContext,
    combobox?: boolean,
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref: ForwardedRef<HTMLDivElement>
  } & AdditionalProps): ReactElement | null {

    const initialFocus = (combobox) ? -1 : undefined;

    return (mounted) ? (
      <FloatingFocusManager context={context} modal={false} visuallyHiddenDismiss={true} initialFocus={initialFocus}>
        <div styleName="root" {...data({status})} {...rest}>
          <Scroll styleName="scroll">
            <div styleName="inner">
              {children}
            </div>
          </Scroll>
        </div>
      </FloatingFocusManager>
    ) : null;

  }
);