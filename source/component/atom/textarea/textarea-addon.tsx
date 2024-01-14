//

import {ComponentProps, ReactElement} from "react";
import {InputAddon} from "/source/component/atom/input";
import {createWithRef} from "/source/component/create";


export const TextareaAddon = createWithRef(
  null, "TextareaAddon",
  function ({
    ...rest
  }: Omit<ComponentProps<typeof InputAddon>, "position">): ReactElement {

    return (
      <InputAddon position="left" {...rest}/>
    );

  }
);