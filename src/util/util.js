console.log(11, "es6模块");

/*eslint-disable */
let name = "caicai";
const age = 11;
const obj = { name: "caicai" };

const add = (x, y) => {
  console.log(`${x}+${y} =`, x + y);
};

export { add, name, obj };

export const func1 = x => x;

export function getName() {
  console.log("姓名：", name);
}

export function setName(newName) {
  name = newName;
}

// 默认输出(一个模块只能有一个export default；不能输出变量;
export default function() {
  console.log("年龄：", age);
}

// 错误
// export default const sex = 'girl';
