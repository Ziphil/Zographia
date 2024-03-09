/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Root} from "/source/component";


type Meta = RawMeta<typeof Root>;
type Story = RawStory<typeof Root>;

export default {
  title: "Atom/Root",
  component: Root
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: null
  }
} as Story;