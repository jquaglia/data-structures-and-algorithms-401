'use strict';

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: l1 = [], l2 = []
// Output: []

// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {
  const newList = new ListNode(0);
  let current = newList;

  while (l1 && l2) {

    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }
  current.next = l1 || l2;

  return newList.next;
};

// var mergeTwoLists = function (l1, l2) {
//   if (!l1 || !l2) return l1 || l2;

//   if (l1.val > l2.val) {
//     [l1, l2] = [l2, l1];
//   }

//   l1.next = mergeTwoLists(l1.next, l2);
//   return l1;
// };