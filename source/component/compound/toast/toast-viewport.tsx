//

import {Viewport as RawToastViewport} from "@radix-ui/react-toast";
import {ReactElement} from "react";
import {create} from "/source/component/create";
import {useTrans} from "/source/hook";
import {AdditionalProps} from "/source/module/data";


export const ToastViewport = create(
  require("./toast-viewport.scss"), "ToastViewport",
  function ({
    ...rest
  }: {
    className?: string
  } & AdditionalProps): ReactElement {

    const {trans} = useTrans("toast");

    return (
      <RawToastViewport styleName="root" label={trans("label.viewport")} {...rest}/>
    );

  }
);
