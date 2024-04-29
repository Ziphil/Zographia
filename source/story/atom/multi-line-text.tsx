/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {MultiLineText} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";


type Meta = RawMeta<typeof MultiLineText>;
type Story = RawStory<typeof MultiLineText>;

export default {
  title: "Atom/MultiLineText",
  component: MultiLineText
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const lineHeightNormal = {
  ...template,
  name: "行間: 普通",
  args: {
    lineHeight: "normal",
    children: "長いテキスト".repeat(50)
  }
} as Story;
export const lineHeightNarrow = {
  ...template,
  name: "行間: 狭い",
  args: {
    lineHeight: "narrow",
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
export const lineHeightNormalFixed = {
  ...template,
  name: "行間: 普通固定値",
  args: {
    lineHeight: "normalFixed",
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

export const testOverflow = {
  ...template,
  name: "[テスト] はみ出し",
  render: () => {
    return (
      <div style={{fontSize: "200%"}}>
        <MultiLineText lineHeight="narrowFixed" maxLineCount={2}>
          ÉǞО̄ أَنيٍ
        </MultiLineText>
      </div>
    );
  }
} as Story;