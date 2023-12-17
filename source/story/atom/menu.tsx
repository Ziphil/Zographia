/* eslint-disable react/jsx-closing-tag-location */

import {action} from "@storybook/addon-actions";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Button, Menu, MenuItem} from "/source/component";


type Meta = RawMeta<typeof Menu>;
type Story = RawStory<typeof Menu>;

export default {
  title: "Atom/Menu",
  component: Menu,
  subcomponents: {MenuItem}
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "[テスト] 非制御",
  render: () => {
    return (
      <Menu trigger={<Button>表示</Button>}>
        {Array.from({length: 100}).map((dummy, index) => (
          <MenuItem key={index} onClick={action(`onItemClick.${index}`)}>{`選択肢${index + 1}`}</MenuItem>
        ))}
      </Menu>
    );
  }
} as Story;