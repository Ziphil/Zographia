//

import {Preview} from "@storybook/react";
import {Title, Subtitle, Description, Controls, Stories, ArgsTable} from "@storybook/blocks";
import React, {Fragment, ReactElement, useEffect} from "react"


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
  }
} as Preview

export default preview;