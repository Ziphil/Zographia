/* eslint-disable react/jsx-closing-tag-location */

import {faThumbsUp} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Button, ButtonIconbag, GeneralIcon} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Button>;
type Story = RawStory<typeof Button>;

export default {
  title: "Atom/Button",
  component: Button,
  subcomponents: {ButtonIconbag}
} as Meta;

const template = {
} as Story;

export const variantSolid = {
  ...template,
  name: "バリアント: 濃い",
  args: {
    variant: "solid",
    children: "ボタンテキスト"
  }
} as Story;
export const variantOutline = {
  ...template,
  name: "バリアント: 薄い",
  args: {
    variant: "outline",
    children: "ボタンテキスト"
  }
} as Story;
export const withIcon = {
  ...template,
  name: "アイコン付き",
  args: {
    children: createChildren(<>
      <ButtonIconbag><GeneralIcon icon={faThumbsUp}/></ButtonIconbag>
      ボタンテキスト
    </>)
  }
} as Story;
export const disabled = {
  ...template,
  name: "無効",
  args: {
    disabled: true,
    children: "ボタンテキスト"
  }
} as Story;
export const loading = {
  ...template,
  name: "ローディング",
  args: {
    reactive: false,
    loading: true,
    children: "ボタンテキスト"
  }
} as Story;