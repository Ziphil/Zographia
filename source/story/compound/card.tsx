/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Button, Card, CardBody, CardFooter, CardHeading, MultiLineText} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Card>;
type Story = RawStory<typeof Card>;

export default {
  title: "Compound/Card",
  component: Card,
  subcomponents: {CardBody, CardHeading, CardFooter}
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const basic = {
  ...template,
  name: "基本",
  args: {
    children: createChildren(<>
      <CardBody>
        <CardHeading>カードタイトル</CardHeading>
        <MultiLineText justify={true}>
          ここのカード本文が入ります。
          ここのカード本文が入ります。
          ここのカード本文が入ります。
          あいうカキク漢字 ABJOQabfpy ÉÃëç أَنْتَ μῆνιν ἄειδε Ἄϊδι。
          あいうカキク漢字 ABJOQabfpy ÉÃëç أَنْتَ μῆνιν ἄειδε Ἄϊδι。
          ここのカード本文が入ります。
          ここのカード本文が入ります。
          ここのカード本文が入ります。
        </MultiLineText>
      </CardBody>
      <CardFooter>
        <Button>操作ボタン</Button>
      </CardFooter>
    </>)
  }
} as Story;