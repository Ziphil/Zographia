//

import {Fallback as RawAvatarFallback} from "@radix-ui/react-avatar";
import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const AvatarFallbackIconContainer = createWithRef(
  require("./avatar-fallback-icon-container.scss"), "AvatarFallbackIconContainer",
  function ({
    hue = 0,
    children,
    ...rest
  }: {
    hue: number,
    children: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLSpanElement>
  } & AdditionalProps): ReactElement {

    return (
      <RawAvatarFallback styleName="root" style={{color: `hsl(${hue}, 100%, 95%)`, backgroundColor: `hsl(${hue}, 30%, 50%)`}} {...rest}>
        {children}
      </RawAvatarFallback>
    );

  }
);