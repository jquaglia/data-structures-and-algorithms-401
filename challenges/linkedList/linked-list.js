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
    if (!current) {
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
    // console.log(string);
    return string;
  }

  append(value) {
    let current = this.head;
    while (current) {
      if (current.next === null) {
        current.next = new Node(value);
        return;
      }
      current = current.next;
    }
  }

  insertBefore(value, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
    while (current.next !== null) {
      if (current.value === value) {
        newNode.next = current;
        this.head = newNode;
      } else if (current.next.value === value) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
      }
      current = current.next;
    }
  }

  insertAfter(value, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
    while (current) {
      if (current.value === value) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
      }
      current = current.next;
    }
  }

  kthFromEnd(k) {
    if(this.head === null || k < 1) {
      return null;
    }

    let pointerOne = this.head;
    let pointerTwo = this.head;
    for(let i = 0; i < k - 1; i++){
      if (pointerTwo === null) {
        return null;
      }
      pointerTwo = pointerTwo.next;
    }

    while(pointerTwo.next !== null) {
      pointerOne = pointerOne.next;
      pointerTwo = pointerTwo.next;
    }

    console.log('ONE', pointerOne);
    return pointerOne.value;
    // console.log('COUNT', getCount());
  }
}

// const ll = new LinkedList();

// ll.head = new Node(0);
// // head: (0) => null
// ll.head.next = new Node(1);
// // head: (0) => (1) => null
// ll.head.next.next = new Node(2);
// // head: (0) => (1) => (2) => null
// ll.head.next.next.next = new Node(3);
// // head: (0) => (1) => (2) => (3) =>  null

// ll.kthFromEnd(2);

module.exports = {
  ll: LinkedList,
  node: Node,
};