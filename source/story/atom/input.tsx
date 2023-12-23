/* eslint-disable react/jsx-closing-tag-location */

import {faExclamationCircle, faSearch} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {GeneralIcon, Input, InputAddon, SuggestionSpec} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Input>;
type Story = RawStory<typeof Input>;

export default {
  title: "Atom/Input",
  component: Input,
  subcomponents: {InputAddon}
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
    defaultValue: "あいうえおねこねこ"
  }
} as Story;
export const withLeftIconAddon = {
  ...template,
  name: "アドオン: 左",
  args: {
    defaultValue: "あいうえおねこねこ",
    children: (
      <InputAddon position="left"><GeneralIcon icon={faSearch}/></InputAddon>
    )
  }
} as Story;
export const withLeftTextAddon = {
  ...template,
  name: "アドオン: 左 (スペースなし)",
  args: {
    defaultValue: "あいうえおねこねこ",
    children: (
      <InputAddon position="left" hasGap={false}>@</InputAddon>
    )
  }
} as Story;
export const withRightIconAddon = {
  ...template,
  name: "アドオン: 右",
  args: {
    defaultValue: "あいうえおねこねこ",
    children: (
      <InputAddon position="right"><GeneralIcon icon={faExclamationCircle}/></InputAddon>
    )
  }
} as Story;
export const withRightTextAddon = {
  ...template,
  name: "アドオン: 右 (スペースなし)",
  args: {
    defaultValue: "あいうえおねこねこ",
    children: (
      <InputAddon position="right" hasGap={false}>万円</InputAddon>
    )
  }
} as Story;
export const withBothAddon = {
  ...template,
  name: "アドオン: 両方",
  args: {
    defaultValue: "あいうえおねこねこ",
    children: createChildren(<>
      <InputAddon position="left"><GeneralIcon icon={faSearch}/></InputAddon>
      <InputAddon position="right">検索</InputAddon>
    </>)
  }
} as Story;
export const typeDate = {
  ...template,
  name: "タイプ: 日付",
  args: {
    type: "date"
  }
} as Story;
export const typeTime = {
  ...template,
  name: "タイプ: 時刻",
  args: {
    type: "time"
  }
} as Story;
export const typeDateTime = {
  ...template,
  name: "タイプ: 日付＋時刻",
  args: {
    type: "datetime"
  }
} as Story;
export const typeMonth = {
  ...template,
  name: "タイプ: 月",
  args: {
    type: "month"
  }
} as Story;
export const typeWeek = {
  ...template,
  name: "タイプ: 週",
  args: {
    type: "week"
  }
} as Story;
export const error = {
  ...template,
  name: "エラー",
  args: {
    defaultValue: "あいうえおねこねこ",
    error: true
  }
} as Story;
export const suggestion = {
  ...template,
  name: "サジェスト",
  args: {
    defaultValue: "あいうえおねこねこ",
    suggest
  }
} as Story;