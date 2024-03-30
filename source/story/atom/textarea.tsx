/* eslint-disable react/jsx-closing-tag-location */

import {faSearch} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {GeneralIcon, Textarea, TextareaAddon} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";


type Meta = RawMeta<typeof Textarea>;
type Story = RawStory<typeof Textarea>;

export default {
  title: "Atom/Textarea",
  component: Textarea,
  subcomponents: {TextareaAddon}
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    defaultValue: "全ての lorem ipsum は、生まれながらにして οὗ μέρος οὐθέν であり、рожьць ѩжє ꙗдѣахѫ свиниѩ について平等である。"
  }
} as Story;
export const monospace = {
  ...template,
  name: "等幅フォント",
  args: {
    fontFamily: "monospace",
    defaultValue: "全ての lorem ipsum は、生まれながらにして οὗ μέρος οὐθέν であり、рожьць ѩжє ꙗдѣахѫ свиниѩ について平等である。"
  }
} as Story;
export const withAddon = {
  ...template,
  name: "アドオン",
  args: {
    defaultValue: "全ての lorem ipsum は、生まれながらにして οὗ μέρος οὐθέν であり、рожьць ѩжє ꙗдѣахѫ свиниѩ について平等である。",
    children: (
      <TextareaAddon><GeneralIcon icon={faSearch}/></TextareaAddon>
    )
  }
} as Story;
export const disabled = {
  ...template,
  name: "無効",
  args: {
    defaultValue: "全ての lorem ipsum は、生まれながらにして οὗ μέρος οὐθέν であり、рожьць ѩжє ꙗдѣахѫ свиниѩ について平等である。",
    disabled: true
  }
} as Story;
export const error = {
  ...template,
  name: "エラー",
  args: {
    defaultValue: "全ての lorem ipsum は、生まれながらにして οὗ μέρος οὐθέν であり、рожьць ѩжє ꙗдѣахѫ свиниѩ について平等である。",
    error: true
  }
} as Story;