// node的核心模块
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 入口文件是"./src/index.js"，进行打包，将打包好的文件bundle.js 放在当前目录下的"dist"文件夹里。

module.exports = {
  mode: "development", // production:被压缩；development:不压缩
  // 打包入口文件
  // entry: "./src/index.js",
  entry: {
    // entry为object时，默认打包出的文件名为键值+'.js'
    main: "./src/index.js",
    sub: "./src/index.js"
  },
  // 打包输出配置
  output: {
    // filename: "bundle.js", // 打包出的文件名
    filename: "[name].js", // main.js sub.js
    path: path.resolve(__dirname, "dist"), // （打包输出的文件路径，文件夹名）。__dirname：当前文件所在路径
    publicPath: "https://cdn.example.com/assets/"
  },
  // 模块处理
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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              // modules: true //  允许使用 CSS Modules
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/, // 处理字体图标文件
        use: [
          {
            loader: "file-loader",
            options: {
              name: "font/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
