/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Checkbox} from "/source/component";


type Meta = RawMeta<typeof Checkbox>;
type Story = RawStory<typeof Checkbox>;

export default {
  title: "Atom/Checkbox",
  component: Checkbox
} as Meta;

const template = {
} as Story;

export const checked = {
  ...template,
  name: "チェックなし",
  args: {
    checked: false
  }
} as Story;
export const unchecked = {
  ...template,
  name: "チェックあり",
  args: {
    checked: true
  }
} as Story;
export const indeterminate = {
  ...template,
  name: "不定",
  args: {
    checked: "indeterminate"
  }
} as Story;
export const errorChecked = {
  ...template,
  name: "エラー＋チェックなし",
  args: {
    checked: false,
    error: true
  }
} as Story;
export const erroUunchecked = {
  ...template,
  name: "エラー＋チェックあり",
  args: {
    checked: true,
    error: true
  }
} as Story;
export const errorIndeterminate = {
  ...template,
  name: "エラー＋不定",
  args: {
    checked: "indeterminate",
    error: true
  }
} as Story;