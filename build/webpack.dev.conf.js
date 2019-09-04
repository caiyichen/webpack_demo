/**
 * development 环境的打包配置文件
 */

// node的核心模块
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");

// 入口文件是"./src/index.js"，进行打包，将打包好的文件bundle.js 放在当前目录下的"dist"文件夹里。
const devConfig = {
  mode: "development", // production:被压缩；development:不压缩
  devtool: "source-map", // development cheap-module-eval-source-map
  // devtool：'cheap-module-source-map',// production
  // 打包入口文件
  // entry: "./src/index.js",
  devServer: {
    overlay: true, // 当有错误时会在浏览器中弹出提示错误(如Eslint错误)
    contentBase: path.join(__dirname, "../dist"), // 从这个文件夹启动一个服务
    open: true, // 启动服务时自动在浏览器中打开
    port: 1992,
    hot: true // 开启热模块更新功能
    // hotOnly: true // 即使HMR功能没生效，也不要浏览器自动重新刷新
    // proxy: {}
  },
  // 插件
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 使用热模块更新插件
  ],
  optimization: {
    usedExports: true // 当mode=development时配置，只导入使用的代码
  }
};

// 合并配置内容
module.exports = merge(baseConfig, devConfig);
