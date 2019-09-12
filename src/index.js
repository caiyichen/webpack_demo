// 使低版本浏览器也支持所有es6的语法
// import "@babel/polyfill";

// Webpack 实现对React框架代码的打包
import React from "react";
import ReactDom from "react-dom";
import App from "./app";

// 引入 CSS 模块
import "./index.css";
// 引入字体图标样式
import "./font/iconfont.css";

ReactDom.render(<App />, document.getElementById("root"));
