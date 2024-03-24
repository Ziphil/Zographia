//

import {ReactElement, ReactNode} from "react";
import {create} from "/source/component/create";


export const MarkdownTable = create(
  require("./markdown-table.scss"), "MarkdownTable",
  function ({
    children
  }: {
    children?: ReactNode
  }): ReactElement {

    return (
      <div styleName="root" className="table-wrapper">
        <table>
          {children}
        </table>
      </div>
    );

  }
);
