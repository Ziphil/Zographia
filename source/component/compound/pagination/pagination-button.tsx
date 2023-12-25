//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/sharp-regular-svg-icons";
import {ReactElement} from "react";
import {VisuallyHidden} from "/source/component/atom/visually-hidden";
import {create} from "/source/component/create";
import {useTrans} from "/source/hook/translation";
import {AdditionalProps, aria, data} from "/source/module/data";


export const PaginationButton = create(
  require("./pagination-button.scss"), "PaginationButton",
  function ({
    page,
    current,
    disabled,
    onClick,
    ...rest
  }: {
    page: number | "previous" | "next",
    current?: boolean,
    disabled?: boolean,
    onClick?: () => unknown,
    className?: string
  } & AdditionalProps): ReactElement {

    const {trans, transNode, transNumber} = useTrans("pagination");

    const numeric = typeof page === "number";

    return (
      <button
        styleName="root"
        type="button"
        disabled={disabled}
        onClick={onClick}
        {...data({numeric, current})}
        {...aria({label: (!numeric) ? trans(page) : undefined})}
        {...rest}
      >
        {(numeric) ? (
          transNode("page", {
            number: page + 1,
            hidden: (child) => <VisuallyHidden>{child}</VisuallyHidden>
          })
        ) : (
          <FontAwesomeIcon icon={page === "previous" ? faChevronLeft : faChevronRight}/>
        )}
      </button>
    );

  }
);