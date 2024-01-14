//

import {ReactElement, ReactNode, useContext} from "react";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";
import {listContext} from "./list-context";
import {ListEmptyView} from "./list-empty-view";
import {ListLoadingView} from "./list-loading-view";


export const ListBody = create(
  null, "ListBody",
  function <T = any>({
    children,
    ...rest
  }: {
    children: ((item: T, index: number) => ReactNode) | [(item: T, index: number) => ReactNode, ...Array<ReactElement>],
    className?: string
  } & AdditionalProps): ReactElement {

    const {items, size, hitSize, page, innerPage} = useContext(listContext);

    const actualItems = (hitSize !== undefined && page !== undefined) ? items : items?.slice(size * innerPage, size * innerPage + size);

    const [render, ...otherElements] = Array.isArray(children) ? children : [children];
    const emptyElement = otherElements.find((element) => element.type === ListEmptyView);
    const loadingElement = otherElements.find((element) => element.type === ListLoadingView);

    return (
      <div {...rest}>
        {(actualItems === undefined) ? (
          loadingElement
        ) : (actualItems.length <= 0) ? (
          emptyElement
        ) : (
          actualItems.map((item, index) => render(item, index))
        )}
      </div>
    );

  }
);
