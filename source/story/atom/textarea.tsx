/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Textarea} from "/source/component";


type Meta = RawMeta<typeof Textarea>;
type Story = RawStory<typeof Textarea>;

export default {
  title: "Atom/Textarea",
  component: Textarea
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
  }
} as Story;
export const error = {
  ...template,
  name: "エラー",
  args: {
    error: true
  }
} as Story;