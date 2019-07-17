// 使低版本浏览器也支持所有es6的语法
import "@babel/polyfill";

import Header from "./component/header/header.js";
import Sider from "./component/sider";
import Footer from "./component/footer";

import createImg from "./createImg";
import util from "./util/util";
import dataJson from "./data.json";

// 引入图片模块
import flagImgURI from "./images/flag.jpg";
// 引入 CSS 模块
import style from "./index.css";
// 引入字体图标样式
import fontStyle from "./font/iconfont.css";

// Webpack 实现对React框架代码的打包
import React from "react";
import ReactDom from "react-dom";
import App from "./app";

ReactDom.render(<App />, document.getElementById("root"));

new Header();
new Sider();
new Footer();
createImg();

// file-loader：使用字体图标库
var rootDom = document.getElementById("root");
var divDom = document.createElement("div");
divDom.innerHTML = `
<span class="iconfont iconaixin"></span>
<span class="iconfont iconbianji"></span>
<span class="iconfont icondianhua"></span>`;
rootDom.appendChild(divDom);

// babel：ES6会被转成ES5
let arr = [1, 2, 3];
arr.map(item => {});
new Promise((resolve, reject) => {
  resolve(1);
}).then(data => {
  console.log("success", data);
});

// 热模块更新（HMR）
if (module.hot) {
  // 如果检测到"./component/footer"模块有更新，则重新执行函数
  module.hot.accept("./component/footer", () => {
    document
      .getElementById("root")
      .removeChild(document.getElementById("footer"));
    new Footer();
  });
}
