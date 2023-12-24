/* eslint-disable react/jsx-closing-tag-location */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Button, ControlGroup, Input} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof ControlGroup>;
type Story = RawStory<typeof ControlGroup>;

export default {
  title: "Atom/ControlGroup",
  component: ControlGroup
} as Meta;

const template = {
} as Story;

export const two = {
  ...template,
  name: "2 つ",
  args: {
    children: createChildren(<>
      <Input/>
      <Button>ボタン</Button>
    </>)
  }
} as Story;
export const three = {
  ...template,
  name: "3 つ",
  args: {
    children: createChildren(<>
      <Input/>
      <Button variant="light">ボタン 1</Button>
      <Button>ボタン 2</Button>
    </>)
  }
} as Story;