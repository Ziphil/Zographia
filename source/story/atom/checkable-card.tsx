/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {CheckableCard, CheckableCardBody, Checkbox, Radio} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof CheckableCard>;
type Story = RawStory<typeof CheckableCard>;

export default {
  title: "Atom/CheckableCard",
  component: CheckableCard,
  subcomponents: {CheckableCardBody}
} as Meta;

const template = {
} as Story;

export const withCheckbox = {
  ...template,
  name: "チェックボックス",
  args: {
    children: createChildren(<>
      <Checkbox/>
      <CheckableCardBody>
        ラベル<br/>
        2 行目<br/>
        3 行目
      </CheckableCardBody>
    </>)
  }
} as Story;
export const withRadio = {
  ...template,
  name: "ラジオボタン",
  args: {
    children: createChildren(<>
      <Radio/>
      <CheckableCardBody>
        ラベル<br/>
        2 行目<br/>
        3 行目
      </CheckableCardBody>
    </>)
  }
} as Story;