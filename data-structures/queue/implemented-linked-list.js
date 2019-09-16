/**
 * Queue
 * 
 * Implemented by linked list.
 * 
 */
class Queue {
  constructor(size = 10) {
    this._size = size
    this.queue = []
  }

  enqueue(x) {
    if (this.size() >= this._size) {
      this.dequeue()
    }
    this.queue.push(x)
  }

  dequeue() {
    return this.queue.splice(0, 1)[0]
  }

  empty() {
    return !this.queue.length
  }

  size() {
    return this.queue.length
  }
}
