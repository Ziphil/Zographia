/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCheck, faCircleInfo, faClose, faExclamationTriangle, faTrashAlt} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import dayjs from "dayjs";
import {useCallback} from "react";
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
  MultiLineText,
  useDialog
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
            <MultiLineText>
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
            <MultiLineText>
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

export const testHook = {
  ...template,
  name: "[テスト] フック",
  render: () => {
    const openDialog = useDialog();
    const handleClick = useCallback(function (): void {
      const dateString = dayjs().format("YYYY/MM/DD HH:mm:ss.SSS");
      openDialog((close) => (
        <Dialog>
          <DialogPane>
            <DialogCloseButton/>
            <DialogBody>
              <DialogIconContainer>
                <GeneralIcon icon={faCircleInfo}/>
              </DialogIconContainer>
              <DialogContent>
                <MultiLineText>
                  ここにダイアログのメッセージが入ります。
                  日時は {dateString} です。
                </MultiLineText>
              </DialogContent>
            </DialogBody>
            <DialogFooter>
              <Button scheme="gray" variant="light" onClick={close}>
                <ButtonIconbag><GeneralIcon icon={faClose}/></ButtonIconbag>
                キャンセル
              </Button>
              <Button>
                <ButtonIconbag><GeneralIcon icon={faCheck}/></ButtonIconbag>
                確認
              </Button>
            </DialogFooter>
          </DialogPane>
        </Dialog>
      ));
    }, [openDialog]);
    return (
      <Button onClick={handleClick}>ダイアログ表示</Button>
    );
  }
} as Story;