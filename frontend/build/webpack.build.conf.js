const path = require("path");
const fs = require('fs');
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const PAGES_DIR = path.join(__dirname, '../src/main/htmlPages');
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith(".html"));

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  entry: {
    registerPage: "./src/main/entryPoints/register.js",
    loginPage: "./src/main/entryPoints/login.js",
    appPage: "./src/main/entryPoints/app.js",
    validationPage: "./src/main/entryPoints/validation.js"
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].[contenthash].js"
  },
  plugins: [
    ...PAGES.map(
      page =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page}`
        })
    ),
    new MiniCssExtractPlugin({
      filename: `./assets/css/[name].[contenthash].css`
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
