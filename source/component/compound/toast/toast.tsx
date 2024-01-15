//

import {Root as RawToastRoot} from "@radix-ui/react-toast";
import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const Toast = createWithRef(
  require("./toast.scss"), "Toast",
  function ({
    open,
    defaultOpen,
    duration = 5000,
    onOpenSet,
    children,
    ...rest
  }: {
    open?: boolean,
    defaultOpen?: boolean,
    duration?: number | null,
    onOpenSet?: (open: boolean) => unknown,
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLLIElement>
  } & AdditionalProps): ReactElement {

    return (
      <RawToastRoot
        styleName="root"
        duration={duration ?? 1000 * 86400}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenSet}
        {...rest}
      >
        {children}
      </RawToastRoot>
    );

  }
);
