//

import {ReactElement, ReactNode, useContext} from "react";
import {create} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";
import {collapsibleContext} from "./collapsible-context";


export const CollapsibleBody = create(
  require("./collapsible-body.scss"), "CollapsibleBody",
  function ({
    height,
    children,
    ...rest
  }: {
    height: string,
    children: ReactNode,
    className?: string
  } & AdditionalProps): ReactElement {

    const {ref, needTruncation, show, scrollHeight} = useContext(collapsibleContext);
    const needTruncationString = (needTruncation === undefined) ? "unknown" : (needTruncation) ? "true" : "false";

    return (
      <div styleName="root" ref={ref} style={{maxHeight: (show) ? `${scrollHeight}px` : height}} {...data({needTruncation: needTruncationString, show})} {...rest}>
        {children}
      </div>
    );

  }
);