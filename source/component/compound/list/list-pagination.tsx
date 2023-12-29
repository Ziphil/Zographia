//

import {ReactElement, Ref, useContext} from "react";
import {Pagination} from "/source/component/compound/pagination";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";
import {listContext} from "./list-context";


export const ListPagination = createWithRef(
  null, "ListPagination",
  function ({
    count = 5,
    ...rest
  }: {
    count?: number | null,
    className?: string,
    ref: Ref<HTMLElement>
  } & AdditionalProps): ReactElement | null {

    const {items, size, hitSize, page, onPageSet, innerPage, onInnerPageSet} = useContext(listContext);

    const actualHitSize = (hitSize !== undefined && page !== undefined) ? hitSize : items?.length;
    const actualPage = (hitSize !== undefined && page !== undefined) ? page : innerPage;
    const actualOnPageSet = (hitSize !== undefined && page !== undefined) ? onPageSet : onInnerPageSet;

    return (actualHitSize !== undefined && actualHitSize > 0) ? (
      <Pagination
        page={actualPage}
        minPage={0}
        maxPage={Math.max(Math.ceil(actualHitSize / size) - 1, 0)}
        count={count}
        onSet={actualOnPageSet}
        {...rest}
      />
    ) : null;

  }
);
