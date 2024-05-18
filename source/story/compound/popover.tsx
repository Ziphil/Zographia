/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Popover} from "/source/component";


type Meta = RawMeta<typeof Popover>;
type Story = RawStory<typeof Popover>;

export default {
  title: "Compound/Popover",
  component: Popover
} as Meta;

const template = {
} as Story;

export const triggerTypeClick = {
  ...template,
  name: "[テスト] クリック",
  args: {
    trigger: <button>表示</button>,
    triggerType: "click",
    children: (
      <div>
        {"ここにはポップオーバーの中身が入ります。".repeat(10)}
      </div>
    )
  }
} as Story;
export const triggerTypeFocus = {
  ...template,
  name: "[テスト] フォーカス",
  args: {
    trigger: <input type="input" value="表示"/>,
    triggerType: "focus",
    children: (
      <div>
        {"ここにはポップオーバーの中身が入ります。".repeat(10)}
      </div>
    )
  }
} as Story;
export const triggerTypeHover = {
  ...template,
  name: "[テスト] ホバー",
  args: {
    trigger: <div>表示</div>,
    triggerType: "hover",
    children: (
      <div>
        {"ここにはポップオーバーの中身が入ります。".repeat(10)}
      </div>
    )
  }
} as Story;