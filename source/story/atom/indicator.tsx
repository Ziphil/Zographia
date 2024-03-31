/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Indicator} from "/source/component";


type Meta = RawMeta<typeof Indicator>;
type Story = RawStory<typeof Indicator>;

export default {
  title: "Atom/Indicator",
  component: Indicator
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: "1,492"
  }
} as Story;
export const animate = {
  ...template,
  name: "アニメーション",
  args: {
    animate: true,
    children: "1,492"
  }
} as Story;