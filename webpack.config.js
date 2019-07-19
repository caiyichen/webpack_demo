// node的核心模块
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

// 入口文件是"./src/index.js"，进行打包，将打包好的文件bundle.js 放在当前目录下的"dist"文件夹里。
module.exports = {
  mode: "development", // production:被压缩；development:不压缩
  devtool: "source-map", // development cheap-module-eval-source-map
  // devtool：'cheap-module-source-map',// production
  // 打包入口文件
  // entry: "./src/index.js",
  devServer: {
    overlay: true, // 当有错误时会在浏览器中弹出提示错误(如Eslint错误)
    contentBase: path.join(__dirname, "dist"), // 从这个文件夹启动一个服务
    open: true, // 启动服务时自动在浏览器中打开
    port: 1992,
    hot: true, // 开启热模块更新功能
    hotOnly: true // 即使HMR功能没生效，也不要浏览器自动重新刷新
    // proxy: {}
  },
  entry: {
    // entry为object时，默认打包输出的文件名为键值+'.js'
    index: "./src/index.js",
    editor: "./src/editor.js"
  },
  // 打包输出配置
  output: {
    // filename: "bundle.js", // 打包出的文件名
    filename: "[name].js", // index.js editor.js
    path: path.resolve(__dirname, "dist") // （打包输出的文件路径，文件夹名）。__dirname：当前文件所在路径
    // publicPath: "https://cdn.example.com/assets/"
  },
  // 模块处理
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 没必要对第三方模块里的js再进行打包处理，babel编译，提升打包速度
        use: [
          {
            loader: "babel-loader" // 对js文件进行babel-loader处理（将ES6语法转换成ES5）
            // options:{} // 对象的内容可摘出来单独放到.babelrc文件中
          },
          {
            loader: "eslint-loader", // 对js文件进行代码风格检测
            options: {
              fix: true, // 开启自动修复功能
              cache: true // 开启缓存
            },
            // enforce: "pre" // 对js文件，强制在其他loader执行之前执行
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader", // file-loader
          options: {
            name: "images/[name]_[hash].[ext]",
            limit: 10240 // 10kb 文件大小限制。小于limit值：则打包成base64放在包文件中（减少http请求）；大于：则打包复制文件到dist目录下并返回文件名（减少包文件大小）
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
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
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
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
    // 打包完成后基于template生成html页面，并自动引入打包后对应的js
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 基于这个模板生成html文件
      filename: "index.html", // 打包生成的html的文件名
      chunks: ["index"] // index.html引入打包后的index.js
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "editor.html",
      chunks: ["editor"] // editor.html引入打包后的editor.js
    }),
    new webpack.HotModuleReplacementPlugin() // 使用热模块更新插件
  ]
};
