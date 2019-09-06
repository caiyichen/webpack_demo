console.log(22, "commonJs模块");
// 基本数据类型
let name = "shitou";
const getName = () => name;
const setName = (newName) => {
  name = newName;
};

// 对象
const person1 = {
  name: "caicai"
};
const getName2 = () => person1.name;
const setName2 = (newName) => {
  person1.name = newName;
};

module.exports = {
  name,
  getName,
  setName,
  person1,
  getName2,
  setName2
};
