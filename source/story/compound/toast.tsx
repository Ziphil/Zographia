/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {faCircleInfo} from "@fortawesome/sharp-regular-svg-icons";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import dayjs from "dayjs";
import {useCallback} from "react";
import {Button, GeneralIcon, Toast, ToastBody, ToastContent, ToastIconContainer, ToastSupplement, useToast} from "/source/component";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Toast>;
type Story = RawStory<typeof Toast>;

export default {
  title: "Compound/Toast",
  component: Toast,
  subcomponents: {ToastIconContainer, ToastBody, ToastContent, ToastSupplement}
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    duration: null,
    children: createChildren(<>
      <ToastIconContainer>
        <GeneralIcon icon={faCircleInfo}/>
      </ToastIconContainer>
      <ToastBody>
        <ToastContent>
          何らかのメッセージがあります。
        </ToastContent>
      </ToastBody>
    </>)
  }
} as Story;
export const withSupplement = {
  ...template,
  name: "補助テキスト付き",
  args: {
    duration: null,
    children: createChildren(<>
      <ToastIconContainer>
        <GeneralIcon icon={faCircleInfo}/>
      </ToastIconContainer>
      <ToastBody>
        <ToastContent>
          何らかの処理が完了して、何らかのメッセージがあります。
        </ToastContent>
        <ToastSupplement>
          ここには、トーストのメインのメッセージに対する補助的なメッセージが入ります。
          使わないことも多いです。
        </ToastSupplement>
      </ToastBody>
    </>)
  }
} as Story;

export const testHook = {
  ...template,
  name: "[テスト] フック",
  render: () => {
    const dispatchToast = useToast();
    const handleClick = useCallback(function (): void {
      const dateString = dayjs().format("YYYY/MM/DD HH:mm:ss.SSS");
      dispatchToast(
        <Toast>
          <ToastIconContainer>
            <GeneralIcon icon={faCircleInfo}/>
          </ToastIconContainer>
          <ToastBody>
            <ToastContent>
              トーストが表示されました。
            </ToastContent>
            <ToastSupplement>
              日時は {dateString} です。
            </ToastSupplement>
          </ToastBody>
        </Toast>
      );
    }, [dispatchToast]);
    return (
      <Button onClick={handleClick}>トースト表示</Button>
    );
  }
} as Story;