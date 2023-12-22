/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {useState} from "react";
import {TagInput} from "/source/component";
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
    values: ["長い長い長いタグ", "長い長い長い長いタグ", "長い長い長い長い長いタグ", "長い長い長い長い長い長いタグ", "ねこねこ", "ねこねこねこ", "うさうさ", "うさうさうさ"]
  }
} as Story;

export const test = {
  ...template,
  name: "[テスト] 制御",
  render: () => {
    const [values, setValues] = useState<Array<string>>([]);
    return (
      <TagInput values={values} onSet={setValues}/>
    );
  }
} as Story;