//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module/color";
import {AdditionalProps, data} from "/source/module/data";


export const Indicator = createWithRef(
  require("./indicator.scss"), "Indicator",
  function ({
    scheme = "primary",
    disabled = false,
    animate = false,
    children,
    ...rest
  }: {
    scheme?: LeveledColorScheme,
    disabled?: boolean,
    animate?: boolean,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...data({scheme, disabled, animate})} {...rest}>
        {children}
      </div>
    );

  }
);
