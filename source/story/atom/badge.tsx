/* eslint-disable react/jsx-closing-tag-location */

import {faCheck} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Badge, BadgeIconbag, GeneralIcon} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Badge>;
type Story = RawStory<typeof Badge>;

export default {
  title: "Atom/Badge",
  component: Badge
} as Meta;

const template = {
} as Story;

export const variantOutline = {
  ...template,
  name: "バリアント: 薄い",
  args: {
    variant: "light",
    children: "1,492"
  }
} as Story;
export const variantSolid = {
  ...template,
  name: "バリアント: 濃い",
  args: {
    variant: "solid",
    children: "1,492"
  }
} as Story;
export const sizeSmall = {
  ...template,
  name: "サイズ: 小さい",
  args: {
    size: "small",
    children: "1,492"
  }
} as Story;
export const shortChild = {
  ...template,
  name: "短い内容",
  args: {
    children: "."
  }
} as Story;
export const withIcon = {
  ...template,
  name: "アイコン付き",
  args: {
    children: createChildren(<>
      <BadgeIconbag><GeneralIcon icon={faCheck}/></BadgeIconbag>
      完了
    </>)
  }
} as Story;