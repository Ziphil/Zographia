//

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Button} from "/source/component";


type Meta = RawMeta<typeof Button>;
type Story = RawStory<typeof Button>;

export default {
  title: "Atom/Button",
  component: Button
} as Meta;

export const Solid = {
  name: "バリアント: 濃い",
  args: {
    foo: "foo"
  }
} as Story;