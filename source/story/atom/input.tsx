/* eslint-disable react/jsx-closing-tag-location */

import {faSearch} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {GeneralIcon, Input, InputAddon} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Input>;
type Story = RawStory<typeof Input>;

export default {
  title: "Atom/Input",
  component: Input,
  subcomponents: {InputAddon}
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
  }
} as Story;
export const withLeftIconAddon = {
  ...template,
  name: "アドオン: 左アイコン",
  args: {
    children: (
      <InputAddon position="left"><GeneralIcon icon={faSearch}/></InputAddon>
    )
  }
} as Story;
export const withLeftTextAddon = {
  ...template,
  name: "アドオン: 左テキスト",
  args: {
    children: (
      <InputAddon position="left">@</InputAddon>
    )
  }
} as Story;
export const withRightTextAddon = {
  ...template,
  name: "アドオン: 右テキスト",
  args: {
    children: (
      <InputAddon position="right">万円</InputAddon>
    )
  }
} as Story;
export const withBothAddon = {
  ...template,
  name: "アドオン: 両方",
  args: {
    children: createChildren(<>
      <InputAddon position="left"><GeneralIcon icon={faSearch}/></InputAddon>
      <InputAddon position="right">を検索</InputAddon>
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
    error: true
  }
} as Story;
export const suggestion = {
  ...template,
  name: "サジェスト",
  args: {
    suggest: (pattern) => {
      const specs = Array.from({length: 100}, (dummy, index) => ({replacement: `${pattern}@${index}`, node: `${pattern}@${index}`}));
      return specs;
    }
  }
} as Story;