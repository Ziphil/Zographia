/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Truncate, TruncateBody, TruncateButton} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Truncate>;
type Story = RawStory<typeof Truncate>;

export default {
  title: "Compound/Truncate",
  component: Truncate
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: createChildren(<>
      <TruncateBody height="240px">
        {"中には入り切らないほどの長いテキストが入ります。".repeat(50)}
      </TruncateBody>
      <TruncateButton/>
    </>)
  }
} as Story;
export const noNeedTruncation = {
  ...template,
  name: "切り詰め不要",
  args: {
    children: createChildren(<>
      <TruncateBody height="240px">
        {"中には入り切らないほどの長いテキストが入ります。".repeat(2)}
      </TruncateBody>
      <TruncateButton/>
    </>)
  }
} as Story;