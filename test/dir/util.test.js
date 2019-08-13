const { expect } = require("chai");
const util = require("../util");

describe("util测试2", () => {
  it("修改姓名", () => {
    expect(util.changeName({ name: "caicai" }, "shitou")).to.be.deep.equal({ name: "shitou" });
  });
});
