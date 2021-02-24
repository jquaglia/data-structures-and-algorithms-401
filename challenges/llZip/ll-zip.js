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
  
}

function zipLists(listOne, listTwo) {
  const newll = new LinkedList();
  listOne = listOne.head;
  listTwo = listTwo.head;
  newll.head = new Node(listOne.value);
  listOne = listOne.next;

  while (listOne || listTwo) {
    if (listOne && listTwo) {
      newll.append(listTwo.value);
      newll.append(listOne.value);
      listTwo = listTwo.next;
      listOne = listOne.next;
    }
    else if (!listOne && listTwo) {
      newll.append(listTwo.value);
      listTwo = listTwo.next;
    }
    else if (listOne && !listTwo) {
      newll.append(listOne.value);
      listOne = listOne.next;
    }
    else {
      return;
    }
  }
  newll.toString();
  return newll;
}

module.exports = {
  ll: LinkedList,
  node: Node,
  zip: zipLists,
};