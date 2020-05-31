const path = require("path");
const fs = require('fs');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
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
    new CopyWebpackPlugin({
      patterns: [
        { from: `./src/assets/img`, to: `./assets/img` },
      ]
    })
  ]
};