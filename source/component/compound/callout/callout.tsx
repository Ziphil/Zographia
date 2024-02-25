//

import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module";
import {AdditionalProps, data} from "/source/module/data";


export const Callout = createWithRef(
  require("./callout.scss"), "Callout",
  function ({
    is = "div",
    scheme = "primary",
    children,
    ...rest
  }: {
    is?: string,
    scheme?: LeveledColorScheme,
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" {...data({scheme})} {...rest}>
        {children}
      </Is>
    );

  }
);
