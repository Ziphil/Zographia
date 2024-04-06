/* eslint-disable react/jsx-closing-tag-location */

import {action} from "@storybook/addon-actions";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Menu, MenuItem, MenuSeparator} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Menu>;
type Story = RawStory<typeof Menu>;

export default {
  title: "Compound/Menu",
  component: Menu,
  subcomponents: {MenuItem}
} as Meta;

const template = {
} as Story;

export const border = {
  ...template,
  name: "ボーダー",
  args: {
    trigger: <button>表示</button>,
    triggerType: "click",
    children: createChildren(<>
      <MenuItem onClick={action("onItemClick.0")}>選択肢1</MenuItem>
      <MenuItem onClick={action("onItemClick.1")}>選択肢2</MenuItem>
      <MenuItem onClick={action("onItemClick.2")}>選択肢3</MenuItem>
      <MenuSeparator/>
      <MenuItem onClick={action("onItemClick.3")}>選択肢4</MenuItem>
      <MenuItem onClick={action("onItemClick.4")}>選択肢5</MenuItem>
      <MenuItem onClick={action("onItemClick.5")}>選択肢6</MenuItem>
    </>)
  }
} as Story;

export const triggerTypeClick = {
  ...template,
  name: "[テスト] クリック",
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
  name: "[テスト] フォーカス",
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
  name: "[テスト] ホバー",
  args: {
    trigger: <div>表示</div>,
    triggerType: "hover",
    children: Array.from({length: 100}).map((dummy, index) => (
      <MenuItem key={index} onClick={action(`onItemClick.${index}`)}>{`選択肢${index + 1}`}</MenuItem>
    ))
  }
} as Story;