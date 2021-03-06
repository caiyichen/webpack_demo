import React, { Component } from "react";
import Header from "./component/header/header";
import Sider from "./component/sider";
import Content from "./component/content";
import Footer from "./component/footer";

import createImg from "./util/createImg";

import dataJson from "./data.json";

class App extends Component {
  componentDidMount() {
    createImg();
    new Sider();

    // babel：ES6会被转成ES5
    // const arr = [1, 2, 3];
    // arr.map((item) => {});
    // new Promise((resolve, reject) => {
    //   resolve(1);
    // }).then((data) => {
    //   //   console.log("success", data);
    // });

    // 热模块更新（HMR）
    if (module.hot) {
      // 如果检测到"./component/footer"模块有更新，则重新执行函数
      module.hot.accept("./component/footer", () => {
        document.getElementById("root").removeChild(document.getElementById("Sider"));
        new Footer();
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        hello world,
        {dataJson.name}
        {/* file-loader：使用字体图标库 */}
        <div>
          <span className="iconfont iconaixin" />
          <span className="iconfont iconbianji" />
          <span className="iconfont icondianhua" />
        </div>
        <Content />
        <Footer />
        {/* <iframe title="iframe" src="editor.html" /> */}
        {/* 模拟弹窗垂直居中 */}
        {/* <div className="box">
          <div className="content">垂直居中</div>
        </div> */}
      </div>
    );
  }
}

export default App;
