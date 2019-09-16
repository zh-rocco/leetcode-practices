class ListNode {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null
    }

    let current = this.head

    while (index > 0) {
      current = current.next
      i--
    }

    return current
  }

  addAtHead(val) {
    const node = new ListNode(val)

    if (!this.head) {
      this.head = this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }

    this.length++
  }

  addAtTail(val) {
    const node = new ListNode(val)

    if (!this.tail) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.length - 1) {
      return
    }

    if (index = 0) {
      return void this.addAtHead(val)
    }

    const node = new ListNode(val)
    let current = this.head

    while (index > 0) {
      if (!current.next) {
        return
      }

      current = current.next
      index--
    }

    const _next = current.next
    current.next = node
    node.next = _next

    if (_next === null) {
      this.tail = node
    }
  }

  deleteAtIndex(index) {

  }
}
