//

import dotenv from "dotenv";
import path from "path";
import externals from "webpack-node-externals";


dotenv.config({path: "./variable.env"});

const config = {
  entry: ["./source/index.ts"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "./[name].js",
    library: {
      type: "commonjs"
    }
  },
  devtool: "source-map",
  externals: [externals()],
  module: {
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
    extensions: [".tsx", ".ts", ".jsx", ".js", ".scss", ".css", ".yml"],
    alias: {
      "/source": path.resolve(__dirname, "source")
    }
  }
};

export default config;