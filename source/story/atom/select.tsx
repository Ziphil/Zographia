/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {useState} from "react";
import {Select, SelectOption} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Select>;
type Story = RawStory<typeof Select>;

export default {
  title: "Atom/Select",
  component: Select,
  subcomponents: {SelectOption}
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: createChildren(<>
      <SelectOption value={0} label="ねこねこ">
        ねこねこ
      </SelectOption>
      <SelectOption value={1} label="うさうさ">
        うさうさ
      </SelectOption>
      <SelectOption value={2} label="うおうお">
        うおうお
      </SelectOption>
    </>)
  }
} as Story;

export const testUncontrolled: Story = {
  ...template,
  name: "[テスト] 非制御",
  render: () => {
    return (
      <Select value={undefined} onSet={undefined}>
        <SelectOption value={0} label="ねこねこ">
          ねこねこ
        </SelectOption>
        <SelectOption value={1} label="うさうさ">
          うさうさ
        </SelectOption>
        <SelectOption value={2} label="うおうお">
          うおうお
        </SelectOption>
      </Select>
    );
  }
};
export const testControlled: Story = {
  ...template,
  name: "[テスト] 制御",
  render: () => {
    const [value, setValue] = useState(2);
    return (
      <Select value={value} onSet={setValue}>
        <SelectOption value={0} label="ねこねこ">
          ねこねこ
        </SelectOption>
        <SelectOption value={1} label="うさうさ">
          うさうさ
        </SelectOption>
        <SelectOption value={2} label="うおうお">
          うおうお
        </SelectOption>
      </Select>
    );
  }
};