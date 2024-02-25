/* eslint-disable react/jsx-closing-tag-location */

import {faFish} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {GeneralIcon, IconButton} from "/source/component";


type Meta = RawMeta<typeof IconButton>;
type Story = RawStory<typeof IconButton>;

export default {
  title: "Atom/IconButton",
  component: IconButton
} as Meta;

const template = {
} as Story;

export const variantSolid = {
  ...template,
  name: "バリアント: 濃い",
  args: {
    variant: "solid",
    label: "ボタン",
    children: <GeneralIcon icon={faFish}/>
  }
} as Story;
export const variantOutline = {
  ...template,
  name: "バリアント: 薄い",
  args: {
    variant: "light",
    label: "ボタン",
    children: <GeneralIcon icon={faFish}/>
  }
} as Story;
export const disabled = {
  ...template,
  name: "無効",
  args: {
    label: "ボタン",
    disabled: true,
    children: <GeneralIcon icon={faFish}/>
  }
} as Story;
export const loading = {
  ...template,
  name: "ローディング",
  args: {
    label: "ボタン",
    reactive: false,
    loading: true,
    children: <GeneralIcon icon={faFish}/>
  }
} as Story;