const path = require("path");
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require("./webpack.base.conf");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  entry: "./src/main/test/test.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "test.js"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: '../dist',
    port: 8080,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
    new MiniCssExtractPlugin({
      filename: `./assets/css/[name].css`
    }),
    new HtmlWebpackPlugin({
      template: "./src/main/test/test.html"
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
