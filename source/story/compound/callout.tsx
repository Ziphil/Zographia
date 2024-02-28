/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCircleInfo} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {
  Callout,
  CalloutBody,
  CalloutIconContainer,
  GeneralIcon,
  MultiLineText
} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Callout>;
type Story = RawStory<typeof Callout>;

export default {
  title: "Compound/Callout",
  component: Callout,
  subcomponents: {CalloutBody, CalloutIconContainer}
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const short = {
  ...template,
  name: "短い",
  args: {
    children: createChildren(<>
      <CalloutIconContainer>
        <GeneralIcon icon={faCircleInfo}/>
      </CalloutIconContainer>
      <CalloutBody>
        これは本文が短いコールアウトです。
      </CalloutBody>
    </>)
  }
} as Story;
export const long = {
  ...template,
  name: "長い",
  args: {
    children: createChildren(<>
      <CalloutIconContainer>
        <GeneralIcon icon={faCircleInfo}/>
      </CalloutIconContainer>
      <CalloutBody>
        <MultiLineText>
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
          これは本文が長いコールアウトです。
        </MultiLineText>
      </CalloutBody>
    </>)
  }
} as Story;