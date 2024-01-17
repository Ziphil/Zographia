/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {MultiLineText} from "/source/component";
import {useTrans} from "/source/hook";
import "/source";


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

export const plural = {
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
        <div>{trans("plural", {value: 12})}</div>
        <div>{trans("plural", {value: 15})}</div>
        <div>{trans("plural", {value: 20})}</div>
        <div>{trans("plural", {value: 21})}</div>
        <div>{trans("plural", {value: 22})}</div>
        <div>{trans("plural", {value: 25})}</div>
        <div>{trans("plural", {value: 100})}</div>
        <div>{trans("plural", {value: 101})}</div>
        <div>{trans("plural", {value: 102})}</div>
        <div>{trans("plural", {value: 105})}</div>
        <div>{trans("plural", {value: 110})}</div>
        <div>{trans("plural", {value: 1000})}</div>
        <div>{trans("plural", {value: 10000})}</div>
        <div>{trans("plural", {value: 1000000})}</div>
        <div>{trans("plural", {value: 1000000000})}</div>
      </MultiLineText>
    );
  }
} as Story;
export const date = {
  ...template,
  name: "日付",
  render: () => {
    const {transDate} = useTrans("test");
    return (
      <MultiLineText>
        <div>{transDate("2024-01-01T00:00")}</div>
        <div>{transDate("2016-02-29T07:15")}</div>
        <div>{transDate("1995-03-12T16:41")}</div>
        <div>{transDate("2002-04-30T05:02")}</div>
        <div>{transDate("1985-05-02T12:27")}</div>
        <div>{transDate("2030-06-11T19:09")}</div>
        <div>{transDate("1988-07-04T02:53")}</div>
        <div>{transDate("2027-08-22T05:22")}</div>
        <div>{transDate("2000-09-29T11:38")}</div>
        <div>{transDate("2012-10-18T14:07")}</div>
        <div>{transDate("2041-11-06T08:49")}</div>
        <div>{transDate("1953-12-15T20:03")}</div>
      </MultiLineText>
    );
  }
} as Story;