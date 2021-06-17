'use strict';

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Example 4:
// Input: root = [1,2]
// Output: [1,2]

// Example 5:
// Input: root = [1,null,2]
// Output: [1,2]

// Algo -> recursion - make helper function, return arr of values, inside helper -> push values into arr, if left recurse left, if right recurse right.

// Big O -> Space: O(n^2)because I'm storing everything in an array?, Time: O(n)
const preorderTraversal = root => {
    const arr = [];
    if (!root) return arr;

    const preOrder = node => {
        arr.push(node.val);
        if (node.left) preOrder(node.left);
        if (node.right) preOrder(node.right);
    };

    preOrder(root);
    return arr;
};

// Big O -> Space: O(n), Time: O(n)
const preorderTraversalIterative = root => {
    const result = [];
    if (!root) return result;

    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

    return result;
};