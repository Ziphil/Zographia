//

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Avatar} from "/source/component";


type Meta = RawMeta<typeof Avatar>;
type Story = RawStory<typeof Avatar>;

export default {
  title: "Atom/Avatar",
  component: Avatar
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    url: "https://www.gravatar.com/avatar/c8d5a3ef94caf90b8f96cae9bc155740?rating=PG&size=44&default=identicon"
  }
} as Story;
export const fallback = {
  ...template,
  name: "フォールバック",
  args: {
    url: null
  }
} as Story;

export const testAlignment = {
  ...template,
  name: "[テスト] アラインメント",
  render: () => {
    return (
      <div>
        あいう123
        <Avatar/>
        あいう123
      </div>
    );
  }
} as Story;