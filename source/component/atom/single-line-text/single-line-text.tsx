//

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const SingleLineText = createWithRef(
  require("./single-line-text.scss"), "SingleLineText",
  function ({
    tag = "div",
    children,
    ...rest
  }: {
    tag: string,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Tag = tag as any;

    return (
      <Tag styleName="root" {...rest}>
        <span styleName="inner">
          {children}
        </span>
      </Tag>
    );

  }
);
