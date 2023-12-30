/* eslint-disable quote-props, @typescript-eslint/naming-convention */

import {ReactElement} from "react";
import ReactMarkdown, {Options as MarkdownOption} from "react-markdown";
import remarkGfm from "remark-gfm";
import {create} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";
import {MarkdownListItem} from "./markdown-list-item";


export const Markdown = create(
  require("./markdown.scss"), "Markdown",
  function ({
    justify = true,
    allowedElements = null,
    disallowedElements = null,
    components = {},
    rehypePlugins = [],
    remarkPlugins = [],
    children,
    ...rest
  }: {
    justify?: boolean,
    allowedElements?: Array<string> | null,
    disallowedElements?: Array<string> | null,
    components?: NonNullable<MarkdownOption["components"]>,
    rehypePlugins?: NonNullable<MarkdownOption["rehypePlugins"]>,
    remarkPlugins?: NonNullable<MarkdownOption["remarkPlugins"]>,
    children: string,
    className?: string
  } & AdditionalProps): ReactElement | null {

    return (
      <div styleName="root" {...rest}>
        <div styleName="inner" {...data({justify})}>
          <ReactMarkdown
            allowedElements={allowedElements}
            disallowedElements={disallowedElements}
            skipHtml={true}
            components={{li: MarkdownListItem, ...components}}
            rehypePlugins={rehypePlugins}
            remarkPlugins={[[remarkGfm, {singleTilde: false}], ...remarkPlugins]}
          >
            {children}
          </ReactMarkdown>
        </div>
      </div>
    );

  }
);
