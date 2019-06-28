// node的核心模块
const path = require("path");

// 入口文件是"./src/index.js"，进行打包，将打包好的文件bundle.js 放在当前目录下的"dist"文件夹里。

module.exports = {
  mode: "development", // production:被压缩；development:不压缩
  entry: "./src/index.js", // 入口文件
  // 打包输出配置
  output: {
    filename: "bundle.js", // 打包出的文件名
    path: path.resolve(__dirname, "dist") // （打包输出的文件路径，文件夹名）。__dirname：当前文件所在路径
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader", // file-loader
          options: {
            name: "images/[name]_[hash].[ext]",
            limit: 1024000 // 文件大小限制 1000kb
          }
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      }
    ]
  }
};
