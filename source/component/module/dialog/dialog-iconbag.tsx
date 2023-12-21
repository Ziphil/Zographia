//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module/color";
import {AdditionalProps, data} from "/source/module/data";


export const DialogIconbag = createWithRef(
  require("./dialog-iconbag.scss"), "DialogIconbag",
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
