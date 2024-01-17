//

import {Trigger as RawTabTrigger} from "@radix-ui/react-tabs";
import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const Tab = createWithRef(
  require("./tab.scss"), "Tab",
  function ({
    value,
    children,
    ...rest
  }: {
    value: string,
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    return (
      <RawTabTrigger styleName="root" value={value} {...rest}>
        {children}
      </RawTabTrigger>
    );

  }
);