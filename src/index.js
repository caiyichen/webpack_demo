import Header from "./component/header/header.js";
import Sider from "./component/sider";
import Footer from "./component/footer";

// 引入图片模块
import flagImgURI from "./images/flag.jpg";
// 引入css模块
import "./index.css";

// console.log(flagImgURI); // 资源名称

new Header();
new Sider();
new Footer();

var imgDom = new Image();
imgDom.src = flagImgURI;
// 添加class
imgDom.classList.add("flag");
var rootDom = document.getElementById("root");
rootDom.appendChild(imgDom);
