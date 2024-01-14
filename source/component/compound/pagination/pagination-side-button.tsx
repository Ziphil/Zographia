//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsis} from "@fortawesome/sharp-regular-svg-icons";
import {ReactElement} from "react";
import {PaginationButton} from "/source/component/compound/pagination/pagination-button";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const PaginationSideButton = create(
  require("./pagination-side-button.scss"), "PaginationSideButton",
  function ({
    page,
    position,
    onClick,
    ...rest
  }: {
    page: number,
    position: "first" | "last",
    onClick?: () => unknown,
    className?: string
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...rest}>
        {(position === "last") && (
          <div styleName="ellipsis-container">
            <FontAwesomeIcon icon={faEllipsis}/>
          </div>
        )}
        <PaginationButton page={page} onClick={onClick}/>
        {(position === "first") && (
          <div styleName="ellipsis-container">
            <FontAwesomeIcon icon={faEllipsis}/>
          </div>
        )}
      </div>
    );

  }
);