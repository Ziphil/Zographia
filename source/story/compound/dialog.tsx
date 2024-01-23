/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCheck, faCircleInfo, faClose, faExclamationTriangle, faTrashAlt} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {
  Button,
  ButtonIconbag,
  Dialog,
  DialogBody,
  DialogCloseButton,
  DialogContent,
  DialogFooter,
  DialogIconContainer,
  DialogPane,
  GeneralIcon,
  MultiLineText
} from "/source/component";


type Meta = RawMeta<typeof Dialog>;
type Story = RawStory<typeof Dialog>;

export default {
  title: "Compound/Dialog",
  component: Dialog,
  subcomponents: {DialogPane, DialogBody, DialogContent, DialogIconContainer, DialogFooter, DialogCloseButton}
} as Meta;

const template = {
  parameters: {
    docs: {story: {inline: false, iframeHeight: 320}}
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
        <DialogBody>
          <DialogIconContainer>
            <GeneralIcon icon={faCircleInfo}/>
          </DialogIconContainer>
          <DialogContent>
            <MultiLineText justify={true}>
              ここにダイアログのメッセージが入ります。
              ここにダイアログのメッセージが入ります。
              ここにダイアログのメッセージが入ります。
            </MultiLineText>
          </DialogContent>
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
export const alert = {
  ...template,
  name: "アラート",
  args: {
    open: true,
    scheme: "red",
    children: (
      <DialogPane>
        <DialogCloseButton/>
        <DialogBody>
          <DialogIconContainer>
            <GeneralIcon icon={faExclamationTriangle}/>
          </DialogIconContainer>
          <DialogContent>
            <MultiLineText justify={true}>
              このユーザーを削除してもよろしいですか?
              一度削除すると、元に戻すことはできません。
            </MultiLineText>
          </DialogContent>
        </DialogBody>
        <DialogFooter>
          <Button scheme="gray" variant="light">
            <ButtonIconbag><GeneralIcon icon={faClose}/></ButtonIconbag>
            キャンセル
          </Button>
          <Button scheme="red">
            <ButtonIconbag><GeneralIcon icon={faTrashAlt}/></ButtonIconbag>
            削除
          </Button>
        </DialogFooter>
      </DialogPane>
    )
  }
} as Story;