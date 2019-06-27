// node的核心模块
const path = require("path");

module.exports = {
  mode: "development", // production:被压缩；development:不压缩
  entry: "./src/index.js", // 入口文件
  // 打包输出配置
  output: {
    filename: "bundle.js", // 打包出的文件名
    path: path.resolve(__dirname, "dist") // （打包输出的文件路径，文件夹名）。__dirname：当前文件所在路径
  }
};

// 入口文件是"./src/index.js"，进行打包，将打包好的文件bundle.js 放在当前目录下的"dist"文件夹里。
