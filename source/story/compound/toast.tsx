/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Toast} from "/source/component";


type Meta = RawMeta<typeof Toast>;
type Story = RawStory<typeof Toast>;

export default {
  title: "Compound/Toast",
  component: Toast
} as Meta;

const template = {
} as Story;

export const basic: Story = {
  ...template,
  name: "基本",
  args: {
    duration: null,
    children: "あいうえお"
  }
};