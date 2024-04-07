/* eslint-disable quote-props, @typescript-eslint/naming-convention */

import {ForwardedRef, ReactElement, ReactNode} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";


export const MultiLineText = createWithRef(
  require("./multi-line-text.scss"), "MultiLineText",
  function ({
    is = "div",
    justify = false,
    lineHeight = "normal",
    maxLineCount = null,
    children,
    ...rest
  }: {
    is?: string,
    justify?: boolean,
    lineHeight?: "normal" | "narrow" | "narrowest" | "wide" | "normalFixed" | "narrowFixed" | "wideFixed",
    maxLineCount?: number | null,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLElement>
  } & AdditionalProps): ReactElement {

    const Is = is as any;

    return (
      <Is styleName="root" style={getStyle(maxLineCount)} {...data({justify, lineHeight, maxLineCount})} {...rest}>
        {children}
      </Is>
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