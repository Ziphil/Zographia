/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCheck, faCircleInfo, faClose, faExclamationTriangle, faTrashAlt} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {
  Button,
  ButtonIconbag,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogIconbag,
  DialogPane,
  GeneralIcon,
  MultiLineText
} from "/source/component";


type Meta = RawMeta<typeof Dialog>;
type Story = RawStory<typeof Dialog>;

export default {
  title: "Module/Dialog",
  component: Dialog,
  subcomponents: {DialogPane, DialogBody, DialogContent, DialogIconbag, DialogFooter}
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    open: true,
    children: (
      <DialogPane>
        <DialogBody>
          <DialogIconbag>
            <GeneralIcon icon={faCircleInfo}/>
          </DialogIconbag>
          <DialogContent>
            <MultiLineText justify={true}>
              ここにダイアログのメッセージが入ります。
              ここにダイアログのメッセージが入ります。
              ここにダイアログのメッセージが入ります。
            </MultiLineText>
          </DialogContent>
        </DialogBody>
        <DialogFooter>
          <Button scheme="gray" variant="outline">
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
    children: (
      <DialogPane>
        <DialogBody>
          <DialogIconbag scheme="red">
            <GeneralIcon icon={faExclamationTriangle}/>
          </DialogIconbag>
          <DialogContent>
            <MultiLineText justify={true}>
              このユーザーを削除してもよろしいですか?
              一度削除すると、元に戻すことはできません。
            </MultiLineText>
          </DialogContent>
        </DialogBody>
        <DialogFooter>
          <Button scheme="gray" variant="outline">
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