/* eslint-disable react/jsx-closing-tag-location */

import {faThumbsUp} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {GeneralIcon, Link, LinkIconbag} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Link>;
type Story = RawStory<typeof Link>;

export default {
  title: "Atom/Link",
  component: Link,
  subcomponents: {LinkIconbag}
} as Meta;

const template = {
} as Story;

export const variantText = {
  ...template,
  name: "バリアント: 単純",
  args: {
    href: "https://example.com",
    variant: "text",
    children: "リンクテキスト"
  }
} as Story;
export const variantSolid = {
  ...template,
  name: "バリアント: 濃い",
  args: {
    href: "https://example.com",
    variant: "solid",
    children: "リンクテキスト"
  }
} as Story;
export const variantOutline = {
  ...template,
  name: "バリアント: 薄い",
  args: {
    href: "https://example.com",
    variant: "light",
    children: "リンクテキスト"
  }
} as Story;
export const withIcon = {
  ...template,
  name: "アイコン付き",
  args: {
    href: "https://example.com",
    children: createChildren(<>
      <LinkIconbag><GeneralIcon icon={faThumbsUp}/></LinkIconbag>
      ボタンテキスト
    </>)
  }
} as Story;