//

import {List as RawTabList, Root as RawTabRoot} from "@radix-ui/react-tabs";
import {ReactElement, ReactNode, Ref} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const TabList = createWithRef(
  require("./tab-list.scss"), "TabList",
  function ({
    value,
    defaultValue,
    onSet,
    children,
    ...rest
  }: {
    value?: string,
    defaultValue?: string,
    onSet?: (value: string) => unknown,
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    return (
      <RawTabRoot value={value} defaultValue={defaultValue} onValueChange={onSet} {...rest}>
        <RawTabList styleName="root">
          {children}
        </RawTabList>
      </RawTabRoot>
    );

  }
);