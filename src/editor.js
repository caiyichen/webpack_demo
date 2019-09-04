// 使低版本浏览器也支持所有es6的语法
// import "@babel/polyfill";

import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  render() {
    return <div>我是内层iframe编辑器</div>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
