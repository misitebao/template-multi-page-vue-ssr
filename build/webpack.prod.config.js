/*
 * @LastEditTime: 2020-03-18 10:02:24
 * @Description: 生产环境配置
 */
const path = require("path");

const baseConfig = require("./webpack.base.config.js");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(baseConfig, {
  mode: "production"
});
