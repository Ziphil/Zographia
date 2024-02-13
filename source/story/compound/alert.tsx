/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCheck, faCircleInfo, faClose, faExclamationTriangle, faTrashAlt} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import dayjs from "dayjs";
import {useCallback} from "react";
import {
  Alert,
  AlertBody,
  AlertCloseButton,
  AlertContent,
  AlertFooter,
  AlertIconContainer,
  AlertPane,
  Button,
  ButtonIconbag,
  GeneralIcon,
  MultiLineText,
  useAlert
} from "/source/component";


type Meta = RawMeta<typeof Alert>;
type Story = RawStory<typeof Alert>;

export default {
  title: "Compound/Alert",
  component: Alert,
  subcomponents: {AlertPane, AlertBody, AlertContent, AlertIconContainer, AlertFooter, AlertCloseButton}
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
      <AlertPane>
        <AlertCloseButton/>
        <AlertBody>
          <AlertIconContainer>
            <GeneralIcon icon={faCircleInfo}/>
          </AlertIconContainer>
          <AlertContent>
            <MultiLineText>
              ここにダイアログのメッセージが入ります。
              ここにダイアログのメッセージが入ります。
              ここにダイアログのメッセージが入ります。
            </MultiLineText>
          </AlertContent>
        </AlertBody>
        <AlertFooter>
          <Button scheme="gray" variant="light">
            <ButtonIconbag><GeneralIcon icon={faClose}/></ButtonIconbag>
            キャンセル
          </Button>
          <Button>
            <ButtonIconbag><GeneralIcon icon={faCheck}/></ButtonIconbag>
            確認
          </Button>
        </AlertFooter>
      </AlertPane>
    )
  }
} as Story;
export const alert = {
  ...template,
  name: "警告",
  args: {
    open: true,
    scheme: "red",
    children: (
      <AlertPane>
        <AlertCloseButton/>
        <AlertBody>
          <AlertIconContainer>
            <GeneralIcon icon={faExclamationTriangle}/>
          </AlertIconContainer>
          <AlertContent>
            <MultiLineText>
              このユーザーを削除してもよろしいですか?
              一度削除すると、元に戻すことはできません。
            </MultiLineText>
          </AlertContent>
        </AlertBody>
        <AlertFooter>
          <Button scheme="gray" variant="light">
            <ButtonIconbag><GeneralIcon icon={faClose}/></ButtonIconbag>
            キャンセル
          </Button>
          <Button scheme="red">
            <ButtonIconbag><GeneralIcon icon={faTrashAlt}/></ButtonIconbag>
            削除
          </Button>
        </AlertFooter>
      </AlertPane>
    )
  }
} as Story;

export const testHook = {
  ...template,
  name: "[テスト] フック",
  render: () => {
    const openAlert = useAlert();
    const handleClick = useCallback(function (): void {
      const dateString = dayjs().format("YYYY/MM/DD HH:mm:ss.SSS");
      openAlert((close) => (
        <Alert>
          <AlertPane>
            <AlertCloseButton/>
            <AlertBody>
              <AlertIconContainer>
                <GeneralIcon icon={faCircleInfo}/>
              </AlertIconContainer>
              <AlertContent>
                <MultiLineText>
                  ここにダイアログのメッセージが入ります。
                  日時は {dateString} です。
                </MultiLineText>
              </AlertContent>
            </AlertBody>
            <AlertFooter>
              <Button scheme="gray" variant="light" onClick={close}>
                <ButtonIconbag><GeneralIcon icon={faClose}/></ButtonIconbag>
                キャンセル
              </Button>
              <Button>
                <ButtonIconbag><GeneralIcon icon={faCheck}/></ButtonIconbag>
                確認
              </Button>
            </AlertFooter>
          </AlertPane>
        </Alert>
      ));
    }, [openAlert]);
    return (
      <Button onClick={handleClick}>ダイアログ表示</Button>
    );
  }
} as Story;