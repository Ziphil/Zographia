//

import {Preview} from "@storybook/react";
import {Title, Subtitle, Description, Controls, Stories, ArgsTable} from "@storybook/blocks";
import React, {Fragment, ReactElement, createElement, useEffect} from "react"
import {Root} from "../source/component"


export const preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*"
    },
    backgrounds: {
      grid: {
        cellSize: 16,
        cellAmount: 4
      },
    },
    docs: {
      page: () => (
        <Fragment>
          <Title/>
          <Description/>
          <ArgsTable/>
          <Stories/>
        </Fragment>
      ),
    }
  },
  decorators: [
    (story) => {
      return (
        <Root>
          {createElement(story)}
        </Root>
      )
    }
  ]
} as Preview

export default preview;