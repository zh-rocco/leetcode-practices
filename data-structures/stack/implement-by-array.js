class Stack {
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
