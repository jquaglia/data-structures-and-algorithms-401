'use strict';

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// Example 4:
// Input: root = [1,2]
// Output: [2,1]

// Example 5:
// Input: root = [1,null,2]
// Output: [2,1]

//ALGO -> recurse/iterative -> check if root is null, create result arr, create helper to go throgh recursively post order -> left, right, arr.push; return arr;

// Big O -> Space: O(n^2) using space to store things in an array, Time: O(n)
const postorderTraversal = root => {
    const result = [];
    if (!root) return result;

    const postOrder = node => {
        if (node.left) postOrder(node.left);
        if (node.right) postOrder(node.right);
        result.push(node.val);
    };

    postOrder(root);
    return result;
};

// Big O -> Space: O(n), Time: O(n)
const postorderTraversalIterative = root => {
    const result = [];
    if (!root) return result;

    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        result.unshift(current.val);
        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
    }

    return result;
};

// Big O -> Space: O(n), Time: O(n)
const postorderTraversalIterative2 = root => {
    const result = [];
    if (!root) return result;

    const stack = [root];

    while (stack.length > 0) {
        const current = stack.pop();
        if(!current) continue;
        if(!current.val) result.push(current);
        stack.push(current.val);
        stack.push(current.right);
        stack.push(current.left);
    }

    return result;
};

// found this clean one online
// const postorderTraversal = (root) => {
//     if (!root) return []
//     return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
//   }