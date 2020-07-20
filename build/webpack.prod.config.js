/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 生产环境配置
 */ 
const path = require("path");

const baseConfig = require("./webpack.base.config.js");
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(baseConfig, {
  mode: "production"
});
