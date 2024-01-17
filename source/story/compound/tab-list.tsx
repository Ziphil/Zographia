/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Tab, TabList} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof TabList>;
type Story = RawStory<typeof TabList>;

export default {
  title: "Compound/TabList",
  component: TabList,
  subcomponents: {Tab}
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: createChildren(<>
      <Tab value="1">
        ねこねこ
      </Tab>
      <Tab value="2">
        うさうさ
      </Tab>
      <Tab value="3">
        うおうお
      </Tab>
    </>)
  }
} as Story;