/* eslint-disable react/jsx-closing-tag-location */

import {action} from "@storybook/addon-actions";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Menu, MenuItem} from "/source/component";


type Meta = RawMeta<typeof Menu>;
type Story = RawStory<typeof Menu>;

export default {
  title: "Atom/Menu",
  component: Menu,
  subcomponents: {MenuItem}
} as Meta;

const template = {
} as Story;

export const triggerTypeClick = {
  ...template,
  name: "トリガー: クリック",
  args: {
    trigger: <button>表示</button>,
    triggerType: "click",
    children: Array.from({length: 100}).map((dummy, index) => (
      <MenuItem key={index} onClick={action(`onItemClick.${index}`)}>{`選択肢${index + 1}`}</MenuItem>
    ))
  }
} as Story;
export const triggerTypeFocus = {
  ...template,
  name: "トリガー: フォーカス",
  args: {
    trigger: <input type="input" value="表示"/>,
    triggerType: "focus",
    children: Array.from({length: 100}).map((dummy, index) => (
      <MenuItem key={index} onClick={action(`onItemClick.${index}`)}>{`選択肢${index + 1}`}</MenuItem>
    ))
  }
} as Story;
export const triggerTypeHover = {
  ...template,
  name: "トリガー: ホバー",
  args: {
    trigger: <div>表示</div>,
    triggerType: "hover",
    children: Array.from({length: 100}).map((dummy, index) => (
      <MenuItem key={index} onClick={action(`onItemClick.${index}`)}>{`選択肢${index + 1}`}</MenuItem>
    ))
  }
} as Story;