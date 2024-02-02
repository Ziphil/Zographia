/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Badge} from "/source/component";


type Meta = RawMeta<typeof Badge>;
type Story = RawStory<typeof Badge>;

export default {
  title: "Atom/Badge",
  component: Badge
} as Meta;

const template = {
} as Story;

export const variantOutline = {
  ...template,
  name: "バリアント: 薄い",
  args: {
    variant: "light",
    children: "1,492"
  }
} as Story;
export const variantSolid = {
  ...template,
  name: "バリアント: 濃い",
  args: {
    variant: "solid",
    children: "1,492"
  }
} as Story;