/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {VisuallyHidden} from "/source/component";


type Meta = RawMeta<typeof VisuallyHidden>;
type Story = RawStory<typeof VisuallyHidden>;

export default {
  title: "Atom/VisuallyHidden",
  component: VisuallyHidden
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: "ここは隠されます"
  }
} as Story;