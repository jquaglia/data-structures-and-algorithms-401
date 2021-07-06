'use strict';

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []


const list = require('../../linkedList/linked-list');

const list1 = new list.ll();
const node = new list.node(7);

list1.head = node;
list1.head.next = new list.node(7);
list1.head.next.next = new list.node(7);
list1.head.next.next.next = new list.node(7);

var removeElements = function (head, val) {
  if (!head) return null;
  let prev = new ListNode('x', head);

  let current = head;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    }
    else { prev = current; }

    current = current.next;
  }

  return prev.next;
};

var removeElements = function (head, val) {
  if (!head) return null;
  if (head.val === val) {
    return removeElements(head.next, val);
  }
  node.next = removeElements(head.next, val);
  return head;
};

console.log(list1.toString());
console.log(removeElements(list1.head, 7));
// console.log(list1.toString());
