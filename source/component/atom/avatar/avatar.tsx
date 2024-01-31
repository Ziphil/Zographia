//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/sharp-solid-svg-icons";
import {Fallback as RawAvatarFallback, Image as RawAvatarImage, Root as RawAvatarRoot} from "@radix-ui/react-avatar";
import {ForwardedRef, ReactElement} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const Avatar = createWithRef(
  require("./avatar.scss"), "Avatar",
  function ({
    url = null,
    alt,
    fallbackHue = 0,
    ...rest
  }: {
    url?: string | null,
    alt?: string,
    fallbackHue?: number,
    className?: string,
    ref: ForwardedRef<HTMLLabelElement>
  } & AdditionalProps): ReactElement {

    return (
      <RawAvatarRoot styleName="root" {...rest}>
        <RawAvatarImage styleName="image" src={url ?? undefined} alt={alt}/>
        <RawAvatarFallback styleName="fallback" style={{color: `hsl(${fallbackHue}, 100%, 95%)`, backgroundColor: `hsl(${fallbackHue}, 30%, 50%)`}}>
          <FontAwesomeIcon styleName="icon" icon={faUser}/>
        </RawAvatarFallback>
      </RawAvatarRoot>
    );

  }
);