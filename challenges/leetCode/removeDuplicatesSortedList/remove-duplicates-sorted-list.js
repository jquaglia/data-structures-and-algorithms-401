'use strict';

const ll = require('../../linkedList/linked-list.js');

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

const list = new ll.ll();
list.head = new ll.node(1);
list.head.next = new ll.node(1);
list.head.next.next = new ll.node(2);


var deleteDuplicates = function (head) {
    const hash = {};
    let current = head;

    hash[current.value] = current.value;

    while (current.next) {
        if (hash[current.next.value]) {
            current.next = current.next.next;
        } else if (current.next) {
            hash[current.next.value] = current.next.value;
        }
        current = current.next;
    }

    return head;
};

console.log(deleteDuplicates(list.head));
