/*
 * @LastEditTime : 2020-06-11 11:42:04
 * @Description: 工具库
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /**
   * @description: 入口配置
   * @param {array} pageList 页面列表
   * @return: {object} entryList 入口map
   */
  getEntrys: function (pageList) {
    pageList = pageList || [];
    var entryList = {};
    for (let i = 0, len = pageList.length; i < len; i++) {
      entryList[pageList[i]] = `./src/assets/js/${pageList[i]}.js`;
    }
    return entryList;
  },
  /**
   * @description: 获取 HtmlWebpackPlugin 配置
   * @param {array} pageList 页面列表
   * @return: {array} HtmlWebpackPluginList HtmlWebpackPlugin配置列表
   */
  getHtmlWebpackPlugins: function (pageList) {
    pageList = pageList || [];
    var HtmlWebpackPluginList = [];
    for (let i = 0, len = pageList.length; i < len; i++) {
      HtmlWebpackPluginList.push(
        new HtmlWebpackPlugin({
          title: pageList[i],
          favicon: "./src/assets/img/favicon.ico",
          filename: pageList[i] + ".html",
          template: "./src/public/" + pageList[i] + ".html",
          chunks: [pageList[i]]
        })
      );
    }
    return HtmlWebpackPluginList;
  }
};