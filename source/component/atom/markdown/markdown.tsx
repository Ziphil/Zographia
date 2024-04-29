/* eslint-disable quote-props, @typescript-eslint/naming-convention */

import {Element as HastElement} from "hast";
import {ReactElement} from "react";
import ReactMarkdown, {Options as MarkdownOption} from "react-markdown";
import remarkGfm from "remark-gfm";
import {create} from "/source/component/create";
import {AdditionalProps, data} from "/source/module/data";
import {MarkdownListItem} from "./markdown-list-item";
import {MarkdownTable} from "./markdown-table";


export const Markdown = create(
  require("./markdown.scss"), "Markdown",
  function ({
    compact = false,
    skipHtml = false,
    allowedElements = null,
    disallowedElements = null,
    components = {},
    transformUrl,
    rehypePlugins = [],
    remarkPlugins = [],
    children,
    ...rest
  }: {
    compact?: boolean,
    skipHtml?: boolean,
    allowedElements?: Array<string> | null,
    disallowedElements?: Array<string> | null,
    components?: NonNullable<MarkdownOption["components"]>,
    transformUrl?: (url: string, key: string, node: Readonly<HastElement>) => string | null,
    rehypePlugins?: NonNullable<MarkdownOption["rehypePlugins"]>,
    remarkPlugins?: NonNullable<MarkdownOption["remarkPlugins"]>,
    children: string,
    className?: string
  } & AdditionalProps): ReactElement | null {

    return (
      <div styleName="root" {...data({compact})} {...rest}>
        <div styleName="inner">
          <ReactMarkdown
            allowedElements={allowedElements}
            disallowedElements={disallowedElements}
            skipHtml={skipHtml}
            components={{li: MarkdownListItem, table: MarkdownTable, ...components}}
            urlTransform={transformUrl}
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
