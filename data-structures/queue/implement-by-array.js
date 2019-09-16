/**
 * Queue
 * 
 * Implemented by array.
 * 
 */
class Queue {
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
