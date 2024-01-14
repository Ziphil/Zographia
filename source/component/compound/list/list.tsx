//

import {ReactElement, ReactNode, useState} from "react";
import {ListContextProvider} from "/source/component/compound/list/list-context";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const List = create(
  null, "List",
  function <T = any>({
    items,
    size,
    hitSize,
    page,
    onPageSet,
    children,
    ...rest
  }: {
    items: Array<T> | undefined,
    size: number,
    hitSize?: number,
    page?: number,
    onPageSet?: (page: number) => void,
    children: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    const [innerPage, onInnerPageSet] = useState(0);

    return (
      <div {...rest}>
        <ListContextProvider value={{items, size, hitSize, page, onPageSet, innerPage, onInnerPageSet}}>
          {children}
        </ListContextProvider>
      </div>
    );

  }
);
