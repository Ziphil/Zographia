//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/sharp-regular-svg-icons";
import {ReactElement, Ref, useCallback} from "react";
import {PaginationButton} from "/source/component/compound/pagination/pagination-button";
import {createWithRef} from "/source/component/create";
import {useTrans} from "/source/hook/translation";
import {AdditionalProps} from "/source/module/data";


export const Pagination = createWithRef(
  require("./pagination.scss"), "Pagination",
  function ({
    page,
    minPage = 0,
    maxPage,
    count = 4,
    onSet,
    ...rest
  }: {
    page: number,
    minPage?: number,
    maxPage: number,
    count?: number,
    onSet?: (page: number) => unknown,
    className?: string,
    ref: Ref<HTMLElement>
  } & AdditionalProps): ReactElement {

    const {trans, transNumber} = useTrans("pagination");

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
        <div styleName="button-group left">
          {(page > minPage) && (
            <>
              <PaginationButton page={minPage} onClick={() => movePage(minPage)}/>
              <div styleName="ellipsis-container">
                <FontAwesomeIcon icon={faEllipsis}/>
              </div>
            </>
          )}
          {calculateButtonSpecs(page, minPage, maxPage, count, -1).map((spec) => (
            <PaginationButton key={spec.page} page={spec.page} onClick={() => movePage(spec.page)}/>
          ))}
        </div>
        <div styleName="button-group center">
          <PaginationButton page={page} current={true}/>
        </div>
        <div styleName="button-group right">
          {calculateButtonSpecs(page, minPage, maxPage, count, 1).map((spec) => (
            <PaginationButton key={spec.page} page={spec.page} onClick={() => movePage(spec.page)}/>
          ))}
          {(page < maxPage) && (
            <>
              <div styleName="ellipsis-container">
                <FontAwesomeIcon icon={faEllipsis}/>
              </div>
              <PaginationButton page={maxPage} onClick={() => movePage(maxPage)}/>
            </>
          )}
        </div>
        <div styleName="button-group rightmost">
          <PaginationButton page="next" disabled={page >= maxPage} onClick={moveNextPage}/>
        </div>
      </nav>
    );

  }
);


function calculateButtonSpecs(page: number, minPage: number, maxPage: number, count: number, direction: 1 | -1): Array<{page: number}> {
  const targetPage = (direction === -1) ? minPage : maxPage;
  const currentPage = page;
  const buttonSpecs = [];
  let difference = 2;
  for (let i = 0 ; i < count ; i ++) {
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