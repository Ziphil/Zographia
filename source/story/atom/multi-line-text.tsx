/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {MultiLineText} from "/source/component";


type Meta = RawMeta<typeof MultiLineText>;
type Story = RawStory<typeof MultiLineText>;

export default {
  title: "Atom/MultiLineText",
  component: MultiLineText
} as Meta;

const template = {
} as Story;

export const lineHeightNormal = {
  ...template,
  name: "行間: 普通",
  args: {
    lineHeight: "normal",
    children: "長いテキスト".repeat(50)
  }
} as Story;
export const lineHeightShort = {
  ...template,
  name: "行間: 狭い",
  args: {
    lineHeight: "short",
    children: "長いテキスト".repeat(50)
  }
} as Story;
export const lineHeightWide = {
  ...template,
  name: "行間: 広い",
  args: {
    lineHeight: "wide",
    children: "長いテキスト".repeat(50)
  }
} as Story;
export const maxLineCount = {
  ...template,
  name: "最大行数",
  args: {
    maxLineCount: 2,
    children: "長いテキスト".repeat(50)
  }
} as Story;
export const variousText = {
  ...template,
  name: "文字種",
  args: {
    children: "あいうカキク漢字 ABJOQabfpy ÉÃëç أَنْتَ μῆνιν ἄειδε Ἄϊδι\n".repeat(50)
  }
} as Story;