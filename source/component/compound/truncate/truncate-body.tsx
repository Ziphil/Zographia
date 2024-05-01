//

import {ReactElement, ReactNode, useContext} from "react";
import {create} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";
import {truncateContext} from "./truncate-context";


export const TruncateBody = create(
  require("./truncate-body.scss"), "TruncateBody",
  function ({
    height,
    children,
    ...rest
  }: {
    height: string,
    children: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    const {ref, needTruncation, show, scrollHeight} = useContext(truncateContext);

    return (
      <div styleName="root" ref={ref} style={{maxHeight: (show) ? `${scrollHeight}px` : height}} {...data({needTruncation, show})} {...rest}>
        {children}
      </div>
    );

  }
);