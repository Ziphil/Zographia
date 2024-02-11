/* eslint-disable react/jsx-closing-tag-location, react-hooks/rules-of-hooks */

import {Meta as RawMeta, StoryObj as RawStory} from "@storybook/react";
import {Card, CardBody, List, ListBody, ListEmptyView, ListLoadingView, ListPagination} from "/source/component";
import {restrictWidth} from "/source/story/decorator/width";


type Meta = RawMeta<typeof List>;
type Story = RawStory<typeof List>;

export default {
  title: "Compound/List",
  component: List,
  subcomponents: {ListBody, ListEmptyView, ListLoadingView, ListPagination}
} as Meta;

const template = {
  decorators: [restrictWidth(600)]
} as Story;

export const testUncontrolledNormal = {
  ...template,
  name: "[テスト] 非制御/通常",
  render: () => {
    return (
      <List
        pageSpec={{size: 4}}
        items={[
          {content: "ねこねこ"},
          {content: "うさうさ"},
          {content: "うおうお"},
          {content: "ねこねこ"},
          {content: "うさうさ"},
          {content: "うおうお"}
        ]}
      >
        <ListBody>
          {(item, index) => (
            <Card>
              <CardBody>
                #{index + 1}: {item.content}
              </CardBody>
            </Card>
          )}
          <ListLoadingView>ローディング中に表示されます</ListLoadingView>
          <ListEmptyView>空のときに表示されます</ListEmptyView>
        </ListBody>
        <ListPagination/>
      </List>
    );
  }
} as Story;
export const testUncontrolledLoading = {
  ...template,
  name: "[テスト] 非制御/ローディング",
  render: () => {
    return (
      <List pageSpec={{size: 4}} items={undefined}>
        <ListBody>
          {(item, index) => (
            <Card>
              <CardBody>
                #{index + 1}: {item.content}
              </CardBody>
            </Card>
          )}
          <ListLoadingView>ローディング中に表示されます</ListLoadingView>
          <ListEmptyView>空のときに表示されます</ListEmptyView>
        </ListBody>
        <ListPagination/>
      </List>
    );
  }
} as Story;
export const testUncontrolledEmpty = {
  ...template,
  name: "[テスト] 非制御/空",
  render: () => {
    return (
      <List pageSpec={{size: 4}} items={[]}>
        <ListBody>
          {(item, index) => (
            <Card>
              <CardBody>
                #{index + 1}: {item.content}
              </CardBody>
            </Card>
          )}
          <ListLoadingView>ローディング中に表示されます</ListLoadingView>
          <ListEmptyView>空のときに表示されます</ListEmptyView>
        </ListBody>
        <ListPagination/>
      </List>
    );
  }
} as Story;