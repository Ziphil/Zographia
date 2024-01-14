/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {useState} from "react";
import {Pagination} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";


type Meta = RawMeta<typeof Pagination>;
type Story = RawStory<typeof Pagination>;

export default {
  title: "Compound/Pagination",
  component: Pagination
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    page: 41,
    maxPage: 499
  }
} as Story;
export const narrow = {
  ...template,
  name: "狭い",
  args: {
    page: 41,
    maxPage: 499
  },
  decorators: [restrictWidth(400)]
} as Story;

export const testControlled = {
  ...template,
  name: "[テスト] 制御",
  render: () => {
    const [page, setPage] = useState(41);
    return (
      <Pagination page={page} maxPage={499} onSet={setPage}/>
    );
  }
} as Story;