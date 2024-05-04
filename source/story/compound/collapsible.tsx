/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Collapsible, CollapsibleBody, CollapsibleButton} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Collapsible>;
type Story = RawStory<typeof Collapsible>;

export default {
  title: "Compound/Collapsible",
  component: Collapsible
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: createChildren(<>
      <CollapsibleBody height="240px">
        {"中には入り切らないほどの長いテキストが入ります。".repeat(50)}
      </CollapsibleBody>
      <CollapsibleButton/>
    </>)
  }
} as Story;
export const noNeedTruncation = {
  ...template,
  name: "切り詰め不要",
  args: {
    children: createChildren(<>
      <CollapsibleBody height="240px">
        {"中には入り切らないほどの長いテキストが入ります。".repeat(2)}
      </CollapsibleBody>
      <CollapsibleButton/>
    </>)
  }
} as Story;