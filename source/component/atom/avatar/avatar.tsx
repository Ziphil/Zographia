//

import {Image as RawAvatarImage, Root as RawAvatarRoot} from "@radix-ui/react-avatar";
import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const Avatar = createWithRef(
  require("./avatar.scss"), "Avatar",
  function ({
    url = null,
    alt,
    inline = false,
    children,
    ...rest
  }: {
    url?: string | null,
    alt?: string,
    inline?: boolean,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLSpanElement>
  } & AdditionalProps): ReactElement {

    return (
      <RawAvatarRoot styleName="root" {...data({inline})} {...rest}>
        <RawAvatarImage styleName="image" src={url ?? undefined} alt={alt}/>
        {children}
      </RawAvatarRoot>
    );

  }
);