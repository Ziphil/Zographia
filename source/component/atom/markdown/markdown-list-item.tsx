//

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/sharp-solid-svg-icons";
import {ReactElement, ReactNode} from "react";
import {create} from "/source/component/create";
import {aria} from "/source/module/data";


export const MarkdownListItem = create(
  require("./markdown-list-item.scss"), "MarkdownListItem",
  function ({
    children
  }: {
    children?: ReactNode
  }): ReactElement {

    return (
      <li styleName="root">
        <span styleName="icon" {...aria({hidden: true})}>
          <FontAwesomeIcon icon={faCaretRight}/>
        </span>
        <span styleName="number" {...aria({hidden: true})}/>
        <div styleName="main">
          {children}
        </div>
      </li>
    );

  }
);
