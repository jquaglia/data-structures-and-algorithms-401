'use strict';

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// ALGO -> iterate through the linked list storing nodes in array. iterate through array backwards to add them to new linked list

// Recursively -> this could work well because you could recurse until you were at the end and then add nodes to new list in that order 

const reverseList = (head, previous = null) => {
    if (!head) return previous;
    
    let temp = head.next;
    head.next = previous;
    return reverseList(temp, head);
};

const reverseList = head => {
    let current = head;
    let previous = null;

    while (current) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    return previous;
};