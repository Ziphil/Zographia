/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCat, faCheck, faClose, faRabbit} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Fragment} from "react";
import {
  Button,
  ButtonIconbag,
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogFooter,
  DialogOutsideButton,
  DialogOutsideButtonContainer,
  DialogOutsideButtonIconbag,
  DialogPane,
  GeneralIcon,
  MultiLineText
} from "/source/component";


type Meta = RawMeta<typeof Dialog>;
type Story = RawStory<typeof Dialog>;

export default {
  title: "Compound/Dialog",
  component: Dialog,
  subcomponents: {DialogPane, DialogBody, DialogOutsideButtonContainer, DialogOutsideButton, DialogOutsideButtonIconbag, DialogCloseButton}
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
        <DialogBody>
          <MultiLineText>
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
          </MultiLineText>
        </DialogBody>
      </DialogPane>
    )
  }
} as Story;
export const basicWithFooter = {
  ...template,
  name: "基本＋フッター",
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
        <DialogBody>
          <MultiLineText>
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
          </MultiLineText>
        </DialogBody>
        <DialogFooter>
          <Button scheme="gray" variant="light">
            <ButtonIconbag><GeneralIcon icon={faClose}/></ButtonIconbag>
            キャンセル
          </Button>
          <Button>
            <ButtonIconbag><GeneralIcon icon={faCheck}/></ButtonIconbag>
            確認
          </Button>
        </DialogFooter>
      </DialogPane>
    )
  }
} as Story;
export const long = {
  ...template,
  name: "長い内容",
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
        <DialogBody>
          <MultiLineText>
            {Array.from({length: 50}).map((dummy, index) => <Fragment key={index}>行 {index + 1}<br/></Fragment>)}
          </MultiLineText>
        </DialogBody>
      </DialogPane>
    )
  }
} as Story;
export const longWithFooter = {
  ...template,
  name: "長い内容＋フッター",
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
        <DialogBody>
          <MultiLineText>
            {Array.from({length: 50}).map((dummy, index) => <Fragment key={index}>行 {index + 1}<br/></Fragment>)}
          </MultiLineText>
        </DialogBody>
        <DialogFooter>
          <Button scheme="gray" variant="light">
            <ButtonIconbag><GeneralIcon icon={faClose}/></ButtonIconbag>
            キャンセル
          </Button>
          <Button>
            <ButtonIconbag><GeneralIcon icon={faCheck}/></ButtonIconbag>
            確認
          </Button>
        </DialogFooter>
      </DialogPane>
    )
  }
} as Story;
export const full = {
  ...template,
  name: "大きい",
  args: {
    height: "full",
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
        <DialogBody>
          <MultiLineText>
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
            ここにダイアログの内容が入ります。
          </MultiLineText>
        </DialogBody>
      </DialogPane>
    )
  }
} as Story;