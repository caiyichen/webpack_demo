// node的核心模块
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// 入口文件是"./src/index.js"，进行打包，将打包好的文件bundle.js 放在当前目录下的"dist"文件夹里。
module.exports = {
  // 打包入口文件
  // entry: "./src/index.js",
  entry: {
    // entry为object时，默认打包输出的文件名为键值+'.js'
    index: "./src/index.js"
    // editor: "./src/editor.js"
  },
  // 打包输出配置
  output: {
    // filename: "bundle.js", // 打包出的文件名
    filename: "[name].js", // index.js editor.js
    path: path.resolve(__dirname, "../dist") // （打包输出的文件路径，文件夹名）。__dirname：当前文件所在路径
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
            }
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
      filename: "index.html" // 打包生成的html的文件名
      // chunks: ["index", "lodash"] // index.html引入打包后的index.js
    })
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "editor.html",
    //   chunks: ["editor"] // editor.html引入打包后的editor.js
    // })
  ],
  // 优化
  optimization: {
    // 代码分割块
    splitChunks: {
      chunks: "all", // 将对哪些块进行优化。all：异步+同步的，async：仅异步的，initial：仅同步的
      minSize: 30, // 大于minSize时才会进行代码分割（单位：字节）
      maxSize: 0,
      minChunks: 1, // 分割前必须共享模块的最小块数（即模块被引用的次数必须大于minChunks）
      maxAsyncRequests: 5, // 按需加载时的最大并行请求数（即只分割成设置的块数）;一般直接使用此默认值哈
      maxInitialRequests: 3, // 入口文件的最大并行请求数（即入口文件引入的库只分割成设置的块数）；一般直接使用此默认值哈
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: true, // 拆分块的名称。true：将根据块和缓存组密钥自动生成名称。（即允许cacheGroups中的filename设置有效）
      // 缓存组（与'chunks'配合使用（all,initial），仅适用于同步块）
      cacheGroups: {
        // 缓存组'vendors'（即：把满足其中条件的同步块分割打包到这个组中，文件名为filename设置的值）
        // 含义：如果是同步块，然后块是从node_modules引入的，就会把这个库分割到vendors.js文件中
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 筛选此缓存组可选择的模块
          priority: -10, // 优先级
          filename: "vendors.js" // 重命名
        },
        // 满足default组条件的块，将被进行default组的分割：
        default: {
          priority: -20,
          reuseExistingChunk: true, // 如果模块已经被打包过了，则直接复用而不需要再被打包
          filename: "common.js"
        }
        // 如果同步块满足vendors、default两个组，则根据priority（优先级）值来确定按哪个组来分割：-10> -20，所以按vendors组分割。
      }
    }
  }
};
