/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {ControlContainer, ControlErrorMessage, ControlHelper, ControlLabel, Input} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof ControlContainer>;
type Story = RawStory<typeof ControlContainer>;

export default {
  title: "Atom/ControlContainer",
  component: ControlContainer,
  subcomponents: {ControlLabel, ControlHelper, ControlErrorMessage}
} as Meta;

const template = {
} as Story;

export const withInput = {
  ...template,
  name: "テキスト欄",
  args: {
    children: createChildren(<>
      <ControlLabel>テキスト欄</ControlLabel>
      <Input/>
    </>)
  }
} as Story;
export const withInputAndHelper = {
  ...template,
  name: "テキスト欄＋ヘルパー",
  args: {
    children: createChildren(<>
      <ControlLabel>テキスト欄</ControlLabel>
      <Input/>
      <ControlHelper>
        ここにはこのテキスト入力欄の説明が入ります。
        ユーザーが何を入力すべきか迷わないように適切な説明を入力しましょう。
      </ControlHelper>
    </>)
  }
} as Story;