var path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: 9000
  },
  entry: {
    "index.bundle": [
      path.resolve(__dirname, "./js/index.js"),
      path.resolve(__dirname, "./scss/index.scss")
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      filename: "./index.html",
      template: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "./css/index.css"
    })
  ]
};

module.exports = config;
