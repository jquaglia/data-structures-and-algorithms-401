'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }


  insert(value) {
    let current = this.head;
    let newNode = new Node(value);

    if(!current) {
      this.head = newNode;
    } else {
      newNode.next = current;
      this.head = newNode;
    }
  }


  includes(value) {
    let current = this.head;
    while (current) {
      if (value === current.value) { return true; }
      else if (current.next === null) { return false; }
      else { current = current.next; }
    }
  }


  toString() {
    let current = this.head;
    let string = '';
  
    while (current) {
      const banana = current.value;
      current = current.next;
      string += `{ ${banana} } -> `;
    }
    string += '{NULL}';
    return string;
  }

}


module.exports = {
  ll: LinkedList,
  node: Node,
};