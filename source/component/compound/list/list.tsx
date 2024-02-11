/* eslint-disable react/jsx-closing-bracket-location */

import {ReactElement, ReactNode, useMemo, useState} from "react";
import {ListContextProvider} from "/source/component/compound/list/list-context";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const List = create(
  null, "List",
  function <T = any>({
    items,
    pageSpec,
    children,
    ...rest
  }: {
    items: Array<T> | undefined,
    pageSpec: PageSpec,
    children: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    const [innerPage, onInnerPageSet] = useState(0);

    const {size, hitSize, page, onPageSet} = pageSpec;

    return (
      <div {...rest}>
        <ListContextProvider value={useMemo(
          () => ({items, size, hitSize, page, onPageSet, innerPage, onInnerPageSet}),
          [items, size, hitSize, page, onPageSet, innerPage, onInnerPageSet]
        )}>
          {children}
        </ListContextProvider>
      </div>
    );

  }
);


export type PageSpec = {
  size: number,
  hitSize?: number,
  page?: number,
  onPageSet?: (page: number) => unknown
};