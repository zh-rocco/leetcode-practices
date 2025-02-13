/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 *
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/description/
 *
 * algorithms
 * Easy (61.12%)
 * Likes:    95
 * Dislikes: 0
 * Total Accepted:    19.5K
 * Total Submissions: 31.9K
 * Testcase Example:  '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * 使用栈实现队列的下列操作：
 * 
 * 
 * push(x) -- 将一个元素放入队列的尾部。
 * pop() -- 从队列首部移除元素。
 * peek() -- 返回队列首部的元素。
 * empty() -- 返回队列是否为空。
 * 
 * 
 * 示例:
 * 
 * MyQueue queue = new MyQueue();
 * 
 * queue.push(1);
 * queue.push(2);  
 * queue.peek();  // 返回 1
 * queue.pop();   // 返回 1
 * queue.empty(); // 返回 false
 * 
 * 说明:
 * 
 * 
 * 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty
 * 操作是合法的。
 * 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 * 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = new Stack()
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let size = this.stack.size()
  const _stack = new Stack()
  let cache

  while (size > 1) {
    _stack.push(this.stack.pop())
    size--
  }

  cache = this.stack.pop()

  while (_stack.size()) {
    this.stack.push(_stack.pop())
  }

  return cache
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let size = this.stack.size()
  const _stack = new Stack()
  let cache

  while (size > 1) {
    _stack.push(this.stack.pop())
    size--
  }

  cache = this.stack.peek()

  while (_stack.size()) {
    this.stack.push(_stack.pop())
  }

  return cache
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.empty()
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var Stack = class {
  constructor() {
    this.stack = []
  }

  push(val) {
    this.stack.push(val)
  }

  pop() {
    return this.stack.pop()
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }

  size() {
    return this.stack.length
  }

  empty() {
    return !this.size()
  }
}

