// function fn() {
//   let instance = null;

//   function test() {
//     if (!instance) {
//       return {};
//     }

//     return instance;
//   }

//   return test;
// }

// var instance = fn()();

function isValid(string) {
  const arr = string.split("");

  const map = {
    "(": -1,
    ")": 1,
    "[": -2,
    "]": 2,
    "{": -3,
    "}": 3,
  };

  const stack = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] < 0) {
      stack.push(arr[i]);
    } else {
      const stackLast = stack.pop();
      if (map[arr[i]] + map[stackLast] !== 0) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

// stack里保存的都是左括号（值<0）
// 规律：遍历的当前一个如果是正数，则判断与栈中的最后一个相加是否为0，不为0则是false。为0时又已经从stack中移除了，所以不影响下一个的判断。

isValid("[[]{}()]");
// console.log(result);

/**
 * 栈
 */
const Stack = (function stack() {
  const _items = Symbol("items");
  return class {
    constructor() {
      this[_items] = [];
    }

    // 添加一个(或几个)新元素到栈顶
    push(item) {
      // 创建了一个假的私有属性（因可以通过Object.getOwnPropertySymbols()获取到Symbol属性）
      this[_items].push(item);
    }

    // 移除栈顶的元素，同时返回被移除的元素。
    pop() {
      return this[_items].pop();
    }

    // 返回栈顶的元素，不对栈做任何修改
    peek() {
      return this[_items][this.size() - 1];
    }

    size() {
      return this[_items].length;
    }

    isEmpty() {
      return this.size() === 0;
    }

    clear() {
      this[_items] = [];
    }

    print() {
      console.log(this[_items].toString());
    }
  };
}());

const stack = new Stack();
stack.push(5);
Object.getOwnPropertySymbols(stack); // [Symbol(items)]
// console.log(stack[symbols[0]]);

/**
 * 队列
 */
class Queue {
  constructor() {
    this.items = [];
  }

  // 入队：向队列尾部添加一个(或多个)新的项
  enQueue(item) {
    this.items.push(item);
  }

  // 出队：移除队列的第一(即排在队列最前面的)项，并返回被移除的元素
  deQueue() {
    return this.items.shift();
  }

  // 查看队头元素
  getHeader() {
    return this.items[0];
  }

  // 查看队列里元素个数
  getSize() {
    return this.items.length;
  }

  // 判断队列是否为空
  isEmpty() {
    return this.getLength() === 0;
  }

  // 清空队列
  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

new Queue();
