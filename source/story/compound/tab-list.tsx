/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCat, faFish, faRabbit} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {GeneralIcon, Tab, TabIconbag, TabList} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof TabList>;
type Story = RawStory<typeof TabList>;

export default {
  title: "Compound/TabList",
  component: TabList,
  subcomponents: {Tab, TabIconbag}
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: createChildren(<>
      <Tab value="1">
        <TabIconbag><GeneralIcon icon={faCat}/></TabIconbag>
        ねこ 1A ねこ
      </Tab>
      <Tab value="2">
        <TabIconbag><GeneralIcon icon={faRabbit}/></TabIconbag>
        うさ 2B うさ
      </Tab>
      <Tab value="3">
        <TabIconbag><GeneralIcon icon={faFish}/></TabIconbag>
        うお 3C うお
      </Tab>
    </>)
  }
} as Story;