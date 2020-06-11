/*
 * @LastEditTime : 2020-06-11 11:26:13
 * @Description: 基础环境配置
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { getEntrys, getHtmlWebpackPlugins } = require("../src/lib/index.js");

// 页面
let pageList = [
  "index"
];

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: getEntrys(pageList),
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js",
    chunkFilename: "js/[chunkhash:8].chunk.js"
  },
  plugins: [
    ...getHtmlWebpackPlugins(pageList),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      publicPath: '../',
      filename: "css/[name].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 800000,
              outputPath: "img/",
              name: "[name].[hash].[ext]"
            }
          }
        ]
      },
      {
        test: [/\.eot$/, /\.ttf/, /\.woff/, /\.woff2/, /\.otf/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 800000,
              outputPath: "/fonts/",
              name: "[name].[hash].[ext]",
              publicPath: '../fonts/'
            }
          }
        ]
      }
    ]
  }
};
