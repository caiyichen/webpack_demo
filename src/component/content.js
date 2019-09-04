import React from "react";
import axios from "axios";
import { add } from "../util/util";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    add(1, 2);

    // 使用lodash
    const join = _.join([1, 2, 3], "**");
    console.log("join===", join);
  }

  componentDidMount() {
    // this.setStateFunc();
    this.getMockData();
  }

  getMockData() {
    axios({
      url: "/mock",
      method: "get",
      baseURL: "https://www.easy-mock.com/mock/5cf5cc38b1f9bc4337c5e5b8/example/api/",
      headers: {
        "cache-control": "max-age=86400,public"
      }
    }).then(
      () => {
        // console.log(data);
        // console.log(...data.data.data.list);
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  setStateFunc() {
    setTimeout(() => {
      // 在 React 控制之外的情况， setState 会同步更新 this.state！
      // 绕过 React 通过 JavaScript 原生 addEventListener 直接添加的事件处理函数，还有使用 setTimeout/setInterval 等 React 无法掌控的 APIs情况下，就会出现同步更新 state 的情况。
      /* eslint-disable */
      this.setState({ count: this.state.count + 1 });
      this.setState({ count: this.state.count + 1 });
      this.setState({ count: this.state.count + 1 }, () => {
        console.log(33, this.state.count);
      });

      console.log(22, this.state.count);
    }, 0);

    console.log(11, this.state.count);
  }

  render() {
    return (
      <div>
        <button onClick={this.getMockData.bind(this)}>点击</button>
        {/* 盒子从左上角移动到右下角 */}
        {/* <div className="move-box" /> */}
      </div>
    );
  }
}

export default Content;
