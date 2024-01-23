//

import {ReactElement, ReactNode, Ref, useCallback, useMemo, useState} from "react";
import {TabListContextProvider} from "/source/component/compound/tab-list/tab-list-context";
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

    const [innerValue, setInnerValue] = useState(defaultValue);
    const actualValue = (value !== undefined) ? value : innerValue;
    const controlled = value !== undefined;

    const handleSet = useCallback(function (value: string): void {
      if (!controlled) {
        setInnerValue(value);
      }
      onSet?.(value);
    }, [controlled, onSet]);

    return (
      <div styleName="root" role="tablist" {...rest}>
        <TabListContextProvider value={useMemo(() => ({value: actualValue, onSet: handleSet}), [actualValue, handleSet])}>
          {children}
        </TabListContextProvider>
      </div>
    );

  }
);