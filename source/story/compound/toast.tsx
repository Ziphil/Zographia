/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import dayjs from "dayjs";
import {useCallback} from "react";
import {Button, Toast, useToast} from "/source/component";


type Meta = RawMeta<typeof Toast>;
type Story = RawStory<typeof Toast>;

export default {
  title: "Compound/Toast",
  component: Toast
} as Meta;

const template = {
} as Story;

export const basic: Story = {
  ...template,
  name: "基本",
  args: {
    duration: null,
    children: "あいうえお"
  }
};

export const testHook: Story = {
  ...template,
  name: "[テスト] フック",
  render: () => {
    const dispatchToast = useToast();
    const handleClick = useCallback(() => {
      const dateString = dayjs().format("YYYY/MM/DD HH:mm:ss.SSS");
      dispatchToast(
        <Toast>
          {dateString}
        </Toast>
      );
    }, [dispatchToast]);
    return (
      <Button onClick={handleClick}>トースト表示</Button>
    );
  }
};