'use stritct';

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

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
// Output: [1,2]


// Space: O(n), Time: O(n)
var inorderTraversal = function (root) {
    if (!root) { return; }
    const result = [];

    const inOrder = (node) => {
        if (node.left) { inOrder(node.left); }
        result.push(node.val);
        if (node.right) { inOrder(node.right); }
    };

    inOrder(root);
    return result;
};

// TODO: Really cool traversal I found on leetcode! Holy cow this is genius!
// const inorderTraversal = root => {
//     if (!root) {
//         return []
//     }
    
//     return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
// }