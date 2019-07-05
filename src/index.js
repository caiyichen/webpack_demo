// 使低版本浏览器也支持所有es6的语法
import "@babel/polyfill";

import Header from "./component/header/header.js";
import Sider from "./component/sider";
import Footer from "./component/footer";

import createImg from "./createImg";
import dataJson from "./data.json";

// 引入图片模块
import flagImgURI from "./images/flag.jpg";
// 引入 CSS 模块
import style from "./index.css";
// 引入字体图标样式
import fontStyle from "./font/iconfont.css";

new Header();
new Sider();
new Footer();
createImg();

// es6会被转成es5
let arr = [1, 2, 3];
arr.map(item => {
  console.log(item);
});
new Promise((resolve, reject) => {
  resolve(1);
}).then(data => {
  console.log("success", data);
});

var imgDom = new Image();
imgDom.src = flagImgURI;
imgDom.classList.add("flag");
// 添加class（模块化）
// imgDom.classList.add(style.flag);
var rootDom = document.getElementById("root");
rootDom.appendChild(imgDom);

// 使用字体图标库
var divDom = document.createElement("div");
divDom.innerHTML = `
<div class="iconfont iconaixin"></div>
<div class="iconfont iconbianji"></div>
<div class="iconfont icondianhua"></div>`;
rootDom.appendChild(divDom);
