/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks, react/jsx-closing-bracket-location */

import {action} from "@storybook/addon-actions";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {Button, SuggestionSpec, TagInput} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";


type Meta = RawMeta<typeof TagInput>;
type Story = RawStory<typeof TagInput>;

export default {
  title: "Atom/TagInput",
  component: TagInput
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

const suggest = async function (pattern: string): Promise<Array<SuggestionSpec>> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const specs = Array.from({length: 100}, (dummy, index) => ({replacement: `${pattern}@${index}`, node: `${pattern}@${index}`}));
  return specs;
};

export const basic = {
  ...template,
  name: "基本",
  args: {
    values: ["タグ", "ねこねこ", "うさうさ"]
  }
} as Story;
export const manyTags = {
  ...template,
  name: "たくさんのタグ",
  args: {
    values: ["長い長い長いタグ", "長い長い長い長いタグ", "長い長い長い長い長いタグ", "長い長い長い長い長い長いタグ", "ねこねこ", "ねこねこねこ"]
  }
} as Story;
export const suggestion = {
  ...template,
  name: "サジェスト",
  args: {
    values: ["タグ", "ねこねこ", "うさうさ"],
    suggest
  }
} as Story;

export const testControlled = {
  ...template,
  name: "[テスト] 制御",
  render: () => {
    const [values, setValues] = useState(["タグ", "ねこねこ", "うさうさ"]);
    return (
      <TagInput values={values} suggest={suggest} onSet={setValues}/>
    );
  }
} as Story;
export const testHook: Story = {
  ...template,
  name: "[テスト] Hook Form",
  render: () => {
    const {control, handleSubmit} = useForm({defaultValues: {value: ["ねこねこ", "うさうさ"]}});
    return (
      <form>
        <Controller name="value" control={control} render={({field}) => (
          <TagInput values={field.value} suggest={suggest} onSet={field.onChange}/>
        )}/>
        <Button type="submit" scheme="gray" variant="light" onClick={handleSubmit(action("onSubmit"))}>送信</Button>
      </form>
    );
  }
};
export const testLabel: Story = {
  ...template,
  name: "[テスト] ラベル内",
  render: () => {
    const [values, setValues] = useState(["タグ", "ねこねこ", "うさうさ"]);
    return (
      <label>
        <TagInput values={values} suggest={suggest} onSet={setValues}/>
      </label>
    );
  }
};