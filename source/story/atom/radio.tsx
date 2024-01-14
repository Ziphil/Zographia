/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {action} from "@storybook/addon-actions";
import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Button, Radio} from "/source/component";


type Meta = RawMeta<typeof Radio>;
type Story = RawStory<typeof Radio>;

export default {
  title: "Atom/Radio",
  component: Radio
} as Meta;

const template = {
} as Story;

export const checked = {
  ...template,
  name: "チェックなし",
  args: {
    checked: false
  }
} as Story;
export const unchecked = {
  ...template,
  name: "チェックあり",
  args: {
    checked: true
  }
} as Story;
export const errorChecked = {
  ...template,
  name: "エラー＋チェックなし",
  args: {
    checked: false,
    error: true
  }
} as Story;
export const erroUunchecked = {
  ...template,
  name: "エラー＋チェックあり",
  args: {
    checked: true,
    error: true
  }
} as Story;

export const testUncontrolled: Story = {
  ...template,
  name: "[テスト] 非制御",
  render: () => {
    return (
      <Radio checked={undefined} onSet={undefined}/>
    );
  }
};
export const testControlled: Story = {
  ...template,
  name: "[テスト] 制御",
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Radio checked={checked} onSet={setChecked}/>
    );
  }
};
export const testHook: Story = {
  ...template,
  name: "[テスト] Hook Form",
  render: () => {
    const {register, handleSubmit} = useForm({defaultValues: {value: "2"}});
    return (
      <form onSubmit={handleSubmit(action("onSubmit"))}>
        <Radio value="1" {...register("value")}/>
        <Radio value="2" {...register("value")}/>
        <Radio value="3" {...register("value")}/>
        <Button type="submit" scheme="gray" variant="light">送信</Button>
      </form>
    );
  }
};