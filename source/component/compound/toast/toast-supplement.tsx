//

import {Description as RawToastDescription} from "@radix-ui/react-toast";
import {ReactElement, ReactNode, Ref} from "react";
import {MultiLineText} from "/source/component/atom/multi-line-text";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ToastSupplement = createWithRef(
  require("./toast-supplement.scss"), "ToastSupplement",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <RawToastDescription asChild={true}>
        <MultiLineText styleName="root" is="p" lineHeight="short" {...rest}>
          {children}
        </MultiLineText>
      </RawToastDescription>
    );

  }
);
