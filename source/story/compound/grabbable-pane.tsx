/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Card, GrabbablePane, GrabbablePaneBody, GrabbablePaneButton, GrabbablePaneGrip, GrabbablePaneGripContainer, MultiLineText} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";
import {createChildren} from "/source/util/children";


type Meta = RawMeta<typeof Card>;
type Story = RawStory<typeof Card>;

export default {
  title: "Compound/GrabbablePane",
  component: GrabbablePane,
  subcomponents: {GrabbablePaneBody, GrabbablePaneGrip, GrabbablePaneGripContainer}
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const normal = {
  ...template,
  name: "グリップのみ",
  args: {
    children: createChildren(<>
      <GrabbablePaneGripContainer>
        <GrabbablePaneGrip/>
      </GrabbablePaneGripContainer>
      <GrabbablePaneBody>
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
      </GrabbablePaneBody>
    </>)
  }
} as Story;
export const withButton = {
  ...template,
  name: "ボタン付き",
  args: {
    children: createChildren(<>
      <GrabbablePaneGripContainer>
        <GrabbablePaneButton position="top"/>
        <GrabbablePaneGrip/>
        <GrabbablePaneButton position="bottom"/>
      </GrabbablePaneGripContainer>
      <GrabbablePaneBody>
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
      </GrabbablePaneBody>
    </>)
  }
} as Story;
export const withDisabledButton = {
  ...template,
  name: "無効ボタン",
  args: {
    children: createChildren(<>
      <GrabbablePaneGripContainer>
        <GrabbablePaneButton position="top" disabled={true}/>
        <GrabbablePaneGrip/>
        <GrabbablePaneButton position="bottom"/>
      </GrabbablePaneGripContainer>
      <GrabbablePaneBody>
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
      </GrabbablePaneBody>
    </>)
  }
} as Story;