//

import {ReactElement, ReactNode} from "react";
import {LoadingIcon} from "/source/component/atom/loading-icon";
import {create} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const ListLoadingView = create(
  require("./list-loading-view.scss"), "ListLoadingView",
  function ({
    children,
    ...rest
  }: {
    children?: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    return (
      <div styleName="root" {...rest}>
        {(children !== undefined) ? children : (
          <div styleName="icon">
            <LoadingIcon/>
          </div>
        )}
      </div>
    );

  }
);
