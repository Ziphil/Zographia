/* eslint-disable react/jsx-closing-tag-location */

import {faCat, faExclamation} from "@fortawesome/sharp-regular-svg-icons";
import {action} from "@storybook/addon-actions";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {GeneralIcon, Menu, MenuItem, MenuItemIconbag, MenuSeparator} from "/source/component";
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

export const withIcon = {
  ...template,
  name: "アイコン付き",
  args: {
    trigger: <button>表示</button>,
    triggerType: "click",
    children: createChildren(<>
      <MenuItem onClick={action("onItemClick.0")}>
        <MenuItemIconbag><GeneralIcon icon={faCat}/></MenuItemIconbag>
        選択肢 1
      </MenuItem>
      <MenuItem onClick={action("onItemClick.1")}>
        <MenuItemIconbag><GeneralIcon icon={faExclamation}/></MenuItemIconbag>
        選択肢 2
      </MenuItem>
      <MenuItem scheme="blue" onClick={action("onItemClick.2")}>
        <MenuItemIconbag><GeneralIcon icon={faCat}/></MenuItemIconbag>
        選択肢 3
      </MenuItem>
      <MenuItem scheme="red" onClick={action("onItemClick.3")}>
        <MenuItemIconbag><GeneralIcon icon={faExclamation}/></MenuItemIconbag>
        選択肢 4
      </MenuItem>
    </>)
  }
} as Story;
export const disabled = {
  ...template,
  name: "無効",
  args: {
    trigger: <button>表示</button>,
    triggerType: "click",
    children: createChildren(<>
      <MenuItem disabled={true} onClick={action("onItemClick.0")}>
        <MenuItemIconbag><GeneralIcon icon={faCat}/></MenuItemIconbag>
        選択肢 1
      </MenuItem>
      <MenuItem onClick={action("onItemClick.1")}>
        <MenuItemIconbag><GeneralIcon icon={faExclamation}/></MenuItemIconbag>
        選択肢 2
      </MenuItem>
      <MenuItem disabled={true} scheme="blue" onClick={action("onItemClick.2")}>
        <MenuItemIconbag><GeneralIcon icon={faCat}/></MenuItemIconbag>
        選択肢 3
      </MenuItem>
      <MenuItem scheme="red" onClick={action("onItemClick.3")}>
        <MenuItemIconbag><GeneralIcon icon={faExclamation}/></MenuItemIconbag>
        選択肢 4
      </MenuItem>
    </>)
  }
} as Story;
export const border = {
  ...template,
  name: "ボーダー",
  args: {
    trigger: <button>表示</button>,
    triggerType: "click",
    children: createChildren(<>
      <MenuItem onClick={action("onItemClick.0")}>選択肢 1</MenuItem>
      <MenuItem onClick={action("onItemClick.1")}>選択肢 2</MenuItem>
      <MenuItem onClick={action("onItemClick.2")}>選択肢 3</MenuItem>
      <MenuSeparator/>
      <MenuItem onClick={action("onItemClick.3")}>選択肢 4</MenuItem>
      <MenuItem onClick={action("onItemClick.4")}>選択肢 5</MenuItem>
      <MenuItem onClick={action("onItemClick.5")}>選択肢 6</MenuItem>
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
      <MenuItem key={index} onClick={action(`onItemClick.${index}`)}>{`選択肢 ${index + 1}`}</MenuItem>
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
      <MenuItem key={index} onClick={action(`onItemClick.${index}`)}>{`選択肢 ${index + 1}`}</MenuItem>
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
      <MenuItem key={index} onClick={action(`onItemClick.${index}`)}>{`選択肢 ${index + 1}`}</MenuItem>
    ))
  }
} as Story;