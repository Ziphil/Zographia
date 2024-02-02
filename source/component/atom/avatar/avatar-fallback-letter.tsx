//

import {Fallback as RawAvatarFallback} from "@radix-ui/react-avatar";
import {ForwardedRef, ReactElement, useMemo} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const AvatarFallbackLetter = createWithRef(
  require("./avatar-fallback-letter.scss"), "AvatarFallbackLetter",
  function ({
    hue = 0,
    children,
    ...rest
  }: {
    hue: number,
    children: string,
    className?: string,
    ref: ForwardedRef<HTMLSpanElement>
  } & AdditionalProps): ReactElement {

    const initial = useMemo(() => children[0], [children]);

    return (
      <RawAvatarFallback styleName="root" style={{color: `hsl(${hue}, 100%, 95%)`, backgroundColor: `hsl(${hue}, 30%, 50%)`}} {...rest}>
        {initial}
      </RawAvatarFallback>
    );

  }
);