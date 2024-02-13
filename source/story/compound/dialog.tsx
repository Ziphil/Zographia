/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCat, faRabbit} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {
  Dialog,
  DialogCloseButton,
  DialogOutsideButton,
  DialogOutsideButtonContainer,
  DialogOutsideButtonIconbag,
  DialogPane,
  GeneralIcon
} from "/source/component";


type Meta = RawMeta<typeof Dialog>;
type Story = RawStory<typeof Dialog>;

export default {
  title: "Compound/Dialog",
  component: Dialog,
  subcomponents: {DialogPane}
} as Meta;

const template = {
  parameters: {
    docs: {story: {inline: false, iframeHeight: 640}}
  }
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    open: true,
    children: (
      <DialogPane>
        <DialogCloseButton/>
        <DialogOutsideButtonContainer>
          <DialogOutsideButton>
            <DialogOutsideButtonIconbag><GeneralIcon icon={faCat}/></DialogOutsideButtonIconbag>
            ボタン 1
          </DialogOutsideButton>
          <DialogOutsideButton>
            <DialogOutsideButtonIconbag><GeneralIcon icon={faRabbit}/></DialogOutsideButtonIconbag>
            ボタン 2
          </DialogOutsideButton>
        </DialogOutsideButtonContainer>
        あああ
      </DialogPane>
    )
  }
} as Story;