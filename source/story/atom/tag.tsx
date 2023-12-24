/* eslint-disable react/jsx-closing-tag-location */

import {faCat} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {GeneralIcon, Tag, TagCloseButton, TagIconbag} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Tag>;
type Story = RawStory<typeof Tag>;

export default {
  title: "Atom/Tag",
  component: Tag,
  subcomponents: {TagIconbag, TagCloseButton}
} as Meta;

const template = {
} as Story;

export const variantOutline = {
  ...template,
  name: "バリアント: 薄い",
  args: {
    variant: "light",
    children: "タグテキスト"
  }
} as Story;
export const variantSolid = {
  ...template,
  name: "バリアント: 濃い",
  args: {
    variant: "solid",
    children: "タグテキスト"
  }
} as Story;
export const withIcon = {
  ...template,
  name: "アイコン付き",
  args: {
    children: createChildren(<>
      <TagIconbag><GeneralIcon icon={faCat}/></TagIconbag>
      タグテキスト
    </>)
  }
} as Story;
export const withCloseButton = {
  ...template,
  name: "ボタン付き",
  args: {
    children: createChildren(<>
      タグテキスト
      <TagCloseButton/>
    </>)
  }
} as Story;