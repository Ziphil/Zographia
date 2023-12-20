/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {SingleLineText} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";


type Meta = RawMeta<typeof SingleLineText>;
type Story = RawStory<typeof SingleLineText>;

export default {
  title: "Atom/SingleLineText",
  component: SingleLineText
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const basic = {
  ...template,
  name: "通常",
  args: {
    children: "長いテキスト".repeat(50)
  }
} as Story;
export const variousText = {
  ...template,
  name: "文字種",
  args: {
    children: "あいうカキク漢字 ABJOQabfpy ÉÃëç أَنْتَ μῆνιν ἄειδε Ἄϊδι"
  }
} as Story;