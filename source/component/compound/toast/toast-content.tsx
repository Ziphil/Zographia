//

import {Title as RawToastTitle} from "@radix-ui/react-toast";
import {ReactElement, ReactNode, Ref} from "react";
import {MultiLineText} from "/source/component/atom/multi-line-text";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ToastContent = createWithRef(
  require("./toast-content.scss"), "ToastContent",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <RawToastTitle asChild={true}>
        <MultiLineText styleName="root" is="p" lineHeight="narrow" {...rest}>
          {children}
        </MultiLineText>
      </RawToastTitle>
    );

  }
);
