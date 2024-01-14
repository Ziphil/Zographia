//

import {ReactElement, Ref, useCallback} from "react";
import {OverflowList} from "react-overflow-list";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";
import {PaginationButton} from "./pagination-button";
import {PaginationSideButton} from "./pagination-side-button";


export const Pagination = createWithRef(
  require("./pagination.scss"), "Pagination",
  function ({
    page,
    minPage = 0,
    maxPage,
    count = 5,
    onSet,
    ...rest
  }: {
    page: number,
    minPage?: number,
    maxPage: number,
    count?: number | null,
    onSet?: (page: number) => unknown,
    className?: string,
    ref: Ref<HTMLElement>
  } & AdditionalProps): ReactElement {

    const movePage = useCallback(function (page: number): void {
      onSet?.(page);
    }, [onSet]);

    const movePreviousPage = useCallback(function (): void {
      const movedPage = Math.max(page - 1, minPage);
      onSet?.(movedPage);
    }, [page, minPage, onSet]);

    const moveNextPage = useCallback(function (): void {
      const movedPage = Math.min(page + 1, maxPage);
      onSet?.(movedPage);
    }, [page, maxPage, onSet]);

    return (
      <nav styleName="root" {...rest}>
        <div styleName="button-group leftmost">
          <PaginationButton page="previous" disabled={page <= minPage} onClick={movePreviousPage}/>
        </div>
        <OverflowList
          styleName="button-group left"
          collapseFrom="start"
          alwaysRenderOverflow={true}
          items={calculateButtonSpecs(page, minPage, maxPage, count, -1)}
          itemRenderer={(spec) => (
            <PaginationButton key={spec.page} page={spec.page} onClick={() => movePage(spec.page)}/>
          )}
          overflowRenderer={() => (page > minPage) && (
            <PaginationSideButton page={minPage} position="first" onClick={() => movePage(minPage)}/>
          )}
        />
        <div styleName="button-group center">
          <PaginationButton page={page} current={true}/>
        </div>
        <OverflowList
          styleName="button-group right"
          collapseFrom="end"
          alwaysRenderOverflow={true}
          items={calculateButtonSpecs(page, minPage, maxPage, count, 1)}
          itemRenderer={(spec) => (
            <PaginationButton key={spec.page} page={spec.page} onClick={() => movePage(spec.page)}/>
          )}
          overflowRenderer={() => (page < maxPage) && (
            <PaginationSideButton page={maxPage} position="last" onClick={() => movePage(maxPage)}/>
          )}
        />
        <div styleName="button-group rightmost">
          <PaginationButton page="next" disabled={page >= maxPage} onClick={moveNextPage}/>
        </div>
      </nav>
    );

  }
);


function calculateButtonSpecs(page: number, minPage: number, maxPage: number, count: number | null, direction: 1 | -1): Array<{page: number}> {
  const targetPage = (direction === -1) ? minPage : maxPage;
  const currentPage = page;
  const actualCount = (count === null) ? 1 / 0 : count;
  const buttonSpecs = [];
  let difference = 2;
  for (let i = 0 ; i < actualCount ; i ++) {
    const nextPage = currentPage + (difference - 1) * direction;
    if ((direction === -1 && nextPage > targetPage) || (direction === 1 && nextPage < targetPage)) {
      buttonSpecs.push({page: nextPage});
    } else {
      break;
    }
    difference *= 2;
  }
  if (direction === -1) {
    buttonSpecs.reverse();
  }
  return buttonSpecs;
};