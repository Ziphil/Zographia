/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {
  Dialog,
  DialogPane
} from "/source/component";


type Meta = RawMeta<typeof Dialog>;
type Story = RawStory<typeof Dialog>;

export default {
  title: "Compound/Dialog",
  component: Dialog,
  subcomponents: {DialogPane}
} as Meta;

const template = {
  parameters: {
    docs: {story: {inline: false, iframeHeight: 640}}
  }
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    open: true,
    children: (
      <DialogPane>
        あああ
      </DialogPane>
    )
  }
} as Story;