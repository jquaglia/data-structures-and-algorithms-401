'use strict';

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

// It is guaranteed that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

// Example 1:
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

// Example 2:
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

// Example 3:
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

// ALGO -> From intersection on, LL are the same length. -> figure out which list is the longer and iterate through it the difference so that both lists have the same amount of nodes left. After this, iterate through the lists checking node and node.next of both for equality. When you find it, return that node. else return null

// BIG O -> Space: O(n), Time: O(2n)
const getIntersectionNode = (headA, headB) => {
  const getLength = current => {
    let counter = 0;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  };

  let a = getLength(headA);
  let b = getLength(headB);
  let difference = 0;

  if (a > b) {
    difference = a - b;
    while (difference !== 0) {
      headA = headA.next;
      difference--;
    }
  }
  else if (b > a) {
    difference = b - a;
    while (difference !== 0) {
      headB = headB.next;
      difference--;
    }
  }

  while (headA) {
    if (headA === headB && headA.next === headB.next) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};

// TIME: O(n + m), SPACE: O(1) (m = difference in length)
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;

  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;

    if (a === b) return a;
  }

  return a;
};
