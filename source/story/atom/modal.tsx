/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Fragment, useState} from "react";
import {Button, Modal} from "/source/component";


type Meta = RawMeta<typeof Modal>;
type Story = RawStory<typeof Modal>;

export default {
  title: "Atom/Modal",
  component: Modal
} as Meta;

const template = {
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    open: true,
    children: "あああ"
  }
} as Story;

export const testUncontrolled = {
  ...template,
  name: "[テスト] 非制御",
  render: () => {
    return (
      <Modal defaultOpen={true}>
        モーダル
      </Modal>
    );
  }
} as Story;
export const testControlled = {
  ...template,
  name: "[テスト] 制御",
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>開く</Button>
        <Modal open={open} onOpenSet={setOpen}>
          モーダル
          <Button onClick={() => setOpen(false)}>閉じる</Button>
        </Modal>
      </div>
    );
  }
} as Story;
export const testScrollLock = {
  ...template,
  name: "[テスト] スクロール",
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>開く</Button>
        <div>
          {Array.from({length: 50}).map((dummy, index) => <Fragment key={index}>行 {index + 1}<br/></Fragment>)}
        </div>
        <Button onClick={() => setOpen(true)}>開く</Button>
        <div>
          {Array.from({length: 50}).map((dummy, index) => <Fragment key={index}>行 {index + 51}<br/></Fragment>)}
        </div>
        <Button onClick={() => setOpen(true)}>開く</Button>
        <Modal open={open} onOpenSet={setOpen}>
          モーダル
          <Button onClick={() => setOpen(false)}>閉じる</Button>
        </Modal>
      </div>
    );
  }
} as Story;