const { expect } = require("chai");
const util = require("./util");

// 1. describe块："测试套件"（test suite），表示一组相关的测试。
// 它是一个函数(测试套件名称，实际执行的函数)

// 2. it块："测试用例"（test case），表示一个单独的测试，是测试的最小单位。
// 它也是一个函数，（测试用例的名称，实际执行的函数）

// 3. 断言：即判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误
// 断言功能由断言库来实现，Mocha本身不带断言库，所以必须先引入断言库。

// 测试套件
describe("util测试1", () => {
  // 测试用例
  it("加法测试", () => {
    // 断言：调用add(1, 1)，结果应该等于2
    expect(util.add(1, 1)).to.be.equal(2);
  });

  it("测试异步", (done) => {
    let y = 0;
    setTimeout(() => {
      y = 1;
      expect(y).to.be.equal(1);
      done(); // 通知Mocha测试结束
    }, 1000);
  });

  it("测试promise", () => {
    let x = 0;
    // 一定要return Promise
    return new Promise((resolve) => {
      setTimeout(() => {
        x = 2;
        resolve(x);
      }, 2000);
    }).then((data) => {
      expect(data).to.be.equal(2);
    });
  });
});
