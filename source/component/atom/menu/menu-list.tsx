//

import {FloatingContext, FloatingFocusManager, FloatingPortal} from "@floating-ui/react";
import {CSSProperties, ForwardedRef, ReactElement, ReactNode} from "react";
import {Scroll} from "/source/component/atom/scroll";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const MenuList = createWithRef(
  require("./menu-list.scss"), "MenuList",
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

    return (mounted) ? (
      <FloatingPortal>
        <FloatingFocusManager context={context} modal={false} initialFocus={(combobox) ? -1 : undefined}>
          <div styleName="root" {...data({status})} {...rest}>
            <Scroll styleName="scroll">
              <div styleName="inner">
                {children}
              </div>
            </Scroll>
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    ) : null;

  }
);