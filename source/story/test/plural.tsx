/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {MultiLineText} from "/source/component";
import {useTrans} from "/source/hook";


type Meta = RawMeta;
type Story = RawStory;

export default {
  title: "Test/国際化",
  parameters: {
    docs: {
      page: require("./template.mdx").default
    }
  }
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "複数形",
  render: () => {
    const {trans} = useTrans("test");
    return (
      <MultiLineText>
        <div>{trans("plural", {value: 0})}</div>
        <div>{trans("plural", {value: 1})}</div>
        <div>{trans("plural", {value: 2})}</div>
        <div>{trans("plural", {value: 3})}</div>
        <div>{trans("plural", {value: 4})}</div>
        <div>{trans("plural", {value: 5})}</div>
        <div>{trans("plural", {value: 10})}</div>
        <div>{trans("plural", {value: 11})}</div>
        <div>{trans("plural", {value: 15})}</div>
        <div>{trans("plural", {value: 20})}</div>
        <div>{trans("plural", {value: 21})}</div>
        <div>{trans("plural", {value: 25})}</div>
        <div>{trans("plural", {value: 100})}</div>
        <div>{trans("plural", {value: 101})}</div>
        <div>{trans("plural", {value: 105})}</div>
        <div>{trans("plural", {value: 110})}</div>
        <div>{trans("plural", {value: 1000})}</div>
      </MultiLineText>
    );
  }
} as Story;