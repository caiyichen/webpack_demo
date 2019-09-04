/**
 * production 环境的打包配置文件
 */
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");

const prodConfig = {
  mode: "production", // production:被压缩；development:不压缩
  devtool: "source-map" // development cheap-module-eval-source-map
  // devtool：'cheap-module-source-map',// production
};

module.exports = merge(baseConfig, prodConfig);
