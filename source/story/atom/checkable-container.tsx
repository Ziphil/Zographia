/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {CheckableContainer, CheckableLabel, Checkbox, Radio} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof CheckableContainer>;
type Story = RawStory<typeof CheckableContainer>;

export default {
  title: "Atom/CheckableContainer",
  component: CheckableContainer,
  subcomponents: {CheckableLabel}
} as Meta;

const template = {
} as Story;

export const withCheckbox = {
  ...template,
  name: "チェックボックス",
  args: {
    children: createChildren(<>
      <Checkbox/>
      <CheckableLabel>ラベル</CheckableLabel>
    </>)
  }
} as Story;
export const variousText = {
  ...template,
  name: "ラジオボタン",
  args: {
    children: createChildren(<>
      <Radio/>
      <CheckableLabel>ラベル</CheckableLabel>
    </>)
  }
} as Story;