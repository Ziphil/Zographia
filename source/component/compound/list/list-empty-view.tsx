//

import {ReactElement, ReactNode} from "react";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ListEmptyView = create(
  require("./list-empty-view.scss"), "ListEmptyView",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...rest}>
        {children}
      </div>
    );

  }
);
