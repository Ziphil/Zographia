/* eslint-disable quote-props, @typescript-eslint/naming-convention */

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const MultiLineText = createWithRef(
  require("./multi-line-text.scss"), "MultiLineText",
  function ({
    tag = "div",
    lineHeight = "normal",
    maxLineCount = null,
    children,
    ...rest
  }: {
    tag?: string,
    lineHeight?: "short" | "normal" | "wide",
    maxLineCount?: number | null,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Tag = tag as any;

    return (
      <Tag styleName="root" style={getStyle(maxLineCount)} {...data({lineHeight, maxLineCount})} {...rest}>
        {children}
      </Tag>
    );

  }
);

function getStyle(maxLineCount?: number | null): any {
  if (maxLineCount !== undefined && maxLineCount !== null) {
    return {"WebkitLineClamp": maxLineCount};
  } else {
    return undefined;
  }
}