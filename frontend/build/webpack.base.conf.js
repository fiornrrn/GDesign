const path = require("path");
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PAGES_DIR = path.join(__dirname, '../src/htmlPages');
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith(".html"));

module.exports = {
  entry: {
    registerPage: "./src/js/entryPoints/registerPage.js",
    loginPage: "./src/js/entryPoints/loginPage.js",
    appPage: "./src/js/entryPoints/appPage.js"
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` }
            }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "~": path.join(__dirname, '../src'),
      "@js": path.join(__dirname, '../src/js'),
      "@stl": path.join(__dirname, '../src/styles'),
      "@fls": path.join(__dirname, '../src/assets')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `./assets/css/[name].[contenthash].css`
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `./src/assets/img`, to: `./assets/img` },
      ]
    }),
    ...PAGES.map(
      page =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page}`
        })
    )
  ]
};