import flagImgURI from "./images/flag.jpg";
import style from "./index.css";

function createImg() {
  var imgDom = new Image();
  imgDom.src = flagImgURI;
  imgDom.classList.add("flag");
  // 添加class（模块化）
  //   imgDom.classList.add(style.flag);
  var rootDom = document.getElementById("root");
  rootDom.appendChild(imgDom);
}

export default createImg;
