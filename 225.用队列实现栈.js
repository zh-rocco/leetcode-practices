/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 *
 * https://leetcode-cn.com/problems/implement-stack-using-queues/description/
 *
 * algorithms
 * Easy (60.19%)
 * Likes:    69
 * Dislikes: 0
 * Total Accepted:    17.2K
 * Total Submissions: 28.6K
 * Testcase Example:  '["MyStack","push","push","top","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * 使用队列实现栈的下列操作：
 * 
 * 
 * push(x) -- 元素 x 入栈
 * pop() -- 移除栈顶元素
 * top() -- 获取栈顶元素
 * empty() -- 返回栈是否为空
 * 
 * 
 * 注意:
 * 
 * 
 * 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty
 * 这些操作是合法的。
 * 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 * 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = new Queue()
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.enqueue(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let size = this.queue.size() - 1

  while (size > 0) {
    let cache = this.queue.dequeue()
    this.queue.enqueue(cache)
    size--
  }

  return this.queue.dequeue()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  let size = this.queue.size()
  let cache

  while (size > 0) {
    cache = this.queue.dequeue()
    this.queue.enqueue(cache)
    size--
  }

  return cache
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.empty()
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// 使用数组实现队列
var Queue = class {
  constructor(size = 10) {
    this._size = size
    this.queue = []
  }

  enqueue(val) {
    if (this.size() >= this._size) {
      this.dequeue()
    }
    this.queue.push(val)
  }

  dequeue() {
    return this.queue.splice(0, 1)[0]
  }

  size() {
    return this.queue.length
  }

  empty() {
    return !this.size()
  }
}

