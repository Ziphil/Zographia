/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCat, faFish, faRabbit} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {useState} from "react";
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
    value: "2",
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

export const testUncontrolled = {
  ...template,
  name: "[テスト] 非制御",
  render: () => {
    return (
      <TabList defaultValue="2">
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
      </TabList>
    );
  }
} as Story;
export const testControlled = {
  ...template,
  name: "[テスト] 制御",
  render: () => {
    const [value, setValue] = useState("2");
    return (
      <TabList value={value} onSet={setValue}>
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
      </TabList>
    );
  }
} as Story;