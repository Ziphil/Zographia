/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {LoadingIcon} from "/source/component";


type Meta = RawMeta<typeof LoadingIcon>;
type Story = RawStory<typeof LoadingIcon>;

export default {
  title: "Atom/LoadingIcon",
  component: LoadingIcon
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
  }
} as Story;