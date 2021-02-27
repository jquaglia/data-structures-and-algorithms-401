'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(node) {
    if (this.isEmpty()) {
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw 'Error no nodes in stack';
    } else {
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek() {
    if (this.isEmpty()) {
      throw 'Error no nodes in stack';
    } else {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.top === null;
  }
}


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(node) {
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw 'Error no nodes in queue';
    } else {
      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp.value;
    }
  }

  peek() {
    if (this.isEmpty()) {
      throw 'Error no nodes in queue';
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.front === null;
  }
}


// let stack = new Stack();
// let nodeA = new Node('A');
// let nodeB = new Node('B');

// stack.push(nodeA);
// stack.push(nodeB);
// let top = stack.pop();
// console.log(top);
// let queue = new Queue();
// queue.enqueue(nodeA);
// queue.enqueue(nodeB);
// console.log(queue);

module.exports = {
  node: Node,
  stack: Stack,
  que: Queue,
};