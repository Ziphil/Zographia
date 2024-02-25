//

import {faUser} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Avatar, AvatarFallbackIconContainer, AvatarFallbackLetter, GeneralIcon} from "/source/component";


type Meta = RawMeta<typeof Avatar>;
type Story = RawStory<typeof Avatar>;

export default {
  title: "Atom/Avatar",
  component: Avatar,
  subcomponents: {AvatarFallbackIconContainer, AvatarFallbackLetter}
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
export const fallbackIcon = {
  ...template,
  name: "フォールバック: アイコン",
  args: {
    url: null,
    children: (
      <AvatarFallbackIconContainer hue={120}>
        <GeneralIcon icon={faUser}/>
      </AvatarFallbackIconContainer>
    )
  }
} as Story;
export const fallbackLetter = {
  ...template,
  name: "フォールバック: 文字",
  args: {
    url: null,
    children: (
      <AvatarFallbackLetter hue={120}>
        Hello
      </AvatarFallbackLetter>
    )
  }
} as Story;

export const testAlignment = {
  ...template,
  name: "[テスト] アラインメント",
  render: () => {
    return (
      <p>
        あいう123
        <Avatar url="https://www.gravatar.com/avatar/c8d5a3ef94caf90b8f96cae9bc155740?rating=PG&size=44&default=identicon" inline={true}/>
        あいう123
      </p>
    );
  }
} as Story;