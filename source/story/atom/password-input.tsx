/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {PasswordInput} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";


type Meta = RawMeta<typeof PasswordInput>;
type Story = RawStory<typeof PasswordInput>;

export default {
  title: "Atom/PasswordInput",
  component: PasswordInput
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    defaultValue: "password"
  }
} as Story;
export const error = {
  ...template,
  name: "エラー",
  args: {
    defaultValue: "password",
    error: true
  }
} as Story;