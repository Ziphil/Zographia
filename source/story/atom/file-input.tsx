/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {FileInput} from "/source/component";


type Meta = RawMeta<typeof FileInput>;
type Story = RawStory<typeof FileInput>;

export default {
  title: "Atom/FileInput",
  component: FileInput
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
  }
} as Story;
export const multiple = {
  ...template,
  name: "複数選択",
  args: {
    multiple: true
  }
} as Story;