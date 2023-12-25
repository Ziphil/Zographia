//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module/color";
import {AdditionalProps, data} from "/source/module/data";


export const DialogIconContainer = createWithRef(
  require("./dialog-icon-container.scss"), "DialogIconContainer",
  function ({
    scheme = "primary",
    children,
    ...rest
  }: {
    scheme?: LeveledColorScheme,
    children: ReactNode,
    className?: string,
    ref?: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...data({scheme})} {...rest}>
        {children}
      </div>
    );

  }
);
