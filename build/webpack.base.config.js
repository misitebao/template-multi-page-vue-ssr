/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 基础环境配置
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack')


const { getEntrys, getHtmlWebpackPlugins } = require("../src/lib/index.js");

// 页面列表
let pageList = [
  "index", "about"
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
  // externals: {
  //   vue: 'Vue',
  // },
  plugins: [// 多环境配置环境变量
    new webpack.DefinePlugin({
      RUN_ENV: JSON.stringify(process.env.RUN_ENV),
      OPEN_PROXY: JSON.stringify(process.env.OPEN_PROXY),
    }),
    ...getHtmlWebpackPlugins(pageList),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      publicPath: '../',
      filename: "css/[name].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{ loader: 'vue-loader' }],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "stylus-loader"
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
