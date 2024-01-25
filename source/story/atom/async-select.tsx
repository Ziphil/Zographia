/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {useState} from "react";
import {AsyncSelect, AsyncSelectOption} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";


type Meta = RawMeta<typeof AsyncSelect>;
type Story = RawStory<typeof AsyncSelect>;

export default {
  title: "Atom/AsyncSelect",
  component: AsyncSelect,
  subcomponents: {AsyncSelectOption}
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

const loadOptions = async function (pattern: string): Promise<Array<string>> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const specs = Array.from({length: 100}, (dummy, index) => `${pattern}@${index}`);
  return specs;
};

export const testUncontrolled = {
  ...template,
  name: "[テスト] 非制御",
  render: () => {
    return (
      <AsyncSelect value={undefined} onSet={undefined} loadOptions={loadOptions}>
        {(value) => (
          <AsyncSelectOption key={value} value={value} label={value}>
            {value}
          </AsyncSelectOption>
        )}
      </AsyncSelect>
    );
  }
} as Story;
export const testControlled = {
  ...template,
  name: "[テスト] 制御",
  render: () => {
    const [value, setValue] = useState("ねこ");
    return (
      <AsyncSelect value={value} onSet={setValue} loadOptions={loadOptions}>
        {(value) => (
          <AsyncSelectOption key={value} value={value} label={value}>
            {value}
          </AsyncSelectOption>
        )}
      </AsyncSelect>
    );
  }
} as Story;