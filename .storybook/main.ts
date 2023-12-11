//

import type {StorybookConfig} from "@storybook/react-webpack5";
import {readCsf} from "@storybook/csf-tools";
import pathUtil from "path";


const config = {
  stories: [
    "../source/story/**/*.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: "ドキュメント"
  },
  webpackFinal: async (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader"
          }
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {modules: {localIdentName: "[name]_[local]_[hash:base64:5]"}, url: false}
            },
            {
              loader: "./loader/convert-unit.ts"
            },
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            }
          ]
        },
        {
          test: /\.yml$/,
          use: [
            {
              loader: "json-loader"
            },
            {
              loader: "yaml-flat-loader"
            }
          ]
        }
      ]
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "/client": pathUtil.join(process.cwd(), "client"),
      },
    }
  }),
  "experimental_indexers": (indexers, option) => {
    const indexer = {
      test: /story\/(atom|module)\/(.+)\.tsx?$/,
      createIndex: (fileName, options) => readCsf(fileName, options).then((file) => file.parse().indexInputs),
    };
    return [...indexers, indexer];
  }
} as StorybookConfig;

export default config;