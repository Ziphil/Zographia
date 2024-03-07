/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {useState} from "react";
import {AsyncSelect, AsyncSelectOption, Button} from "/source/component";
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
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const specs = Array.from({length: 100}, (dummy, index) => `${pattern}@${index}`);
  return specs;
};

export const testUncontrolled = {
  ...template,
  name: "[テスト] 非制御",
  render: () => {
    return (
      <AsyncSelect value={undefined} defaultValue="" onSet={undefined} loadOptions={loadOptions} renderLabel={(option) => option}>
        {(value) => (
          <AsyncSelectOption key={value}>
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
      <AsyncSelect value={value} onSet={setValue} loadOptions={loadOptions} renderLabel={(option) => option}>
        {(value) => (
          <AsyncSelectOption key={value}>
            {value}
          </AsyncSelectOption>
        )}
      </AsyncSelect>
    );
  }
} as Story;
export const testFocus = {
  ...template,
  name: "[テスト] フォーカス",
  render: () => {
    return (
      <div>
        <Button>前</Button>
        <AsyncSelect value={undefined} defaultValue="" onSet={undefined} loadOptions={loadOptions} renderLabel={(option) => option}>
          {(value) => (
            <AsyncSelectOption key={value}>
              {value}
            </AsyncSelectOption>
          )}
        </AsyncSelect>
        <Button>後</Button>
      </div>
    );
  }
} as Story;