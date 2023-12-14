//

import {Preview} from "@storybook/react";
import {Title, Subtitle, Description, Controls, Stories, ArgsTable} from "@storybook/blocks";
import React, {Fragment, ReactElement, createElement, useEffect, useState} from "react"
import {Root} from "../source/component"
import {useChangeLocale} from "../source/hook/locale";
import {useChangeTheme} from "../source/hook/theme";


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
  globalTypes: {
    locale: {
      defaultValue: "ja",
      toolbar: {
        title: "言語",
        icon: "globe",
        items: [
          {value: "ja", title: "日本語"},
          {value: "en", title: "English"},
          {value: "eo", title: "Esperanto"}
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      defaultValue: "light",
      toolbar: {
        title: "テーマ",
        icon: "circlehollow",
        items: [
          {value: "light", title: "Light"},
          {value: "dark", title: "Dark"}
        ],
        dynamicTitle: true,
      },
    }
  },
  decorators: [
    (story) => {
      const [ready, setReady] = useState(false);
      useEffect(() => {
        setReady(true);
      }, []);
      return (ready) && (
        <Fragment>
          {createElement(story)}
        </Fragment>
      )
    },
    (story, context) => {
      const changeLocale = useChangeLocale();
      const changeTheme = useChangeTheme();
      useEffect(() => {
        const {locale, theme} = context.globals;
        changeLocale(locale);
        changeTheme(theme);
      }, [context.globals]);
      return (
        <Fragment>
          {createElement(story)}
        </Fragment>
      )
    },
    (story) => {
      return (
        <Root>
          {createElement(story)}
        </Root>
      )
    },
  ]
} as Preview

export default preview;