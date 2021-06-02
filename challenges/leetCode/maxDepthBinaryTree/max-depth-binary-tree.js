'use strict';

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Example 3:
// Input: root = []
// Output: 0

// Example 4:
// Input: root = [0]
// Output: 1

const a = require('../../tree/tree.js');

const maxDepth = root => {
    if (!root) return 0;
    let result = 0;

    const preOrder = (node, depth) => {
        if (!node) return;

        depth += 1;
        if (!node.left && !node.right && depth > result) { result = depth; }
        if (node.left) preOrder(node.left, depth);
        if (node.right) preOrder(node.right, depth);
    };

    preOrder(root, 0);
    return result;
};

const aTree = new a.BiTree();
aTree.root = new a.Node(1);
aTree.root.left = new a.Node(3);
aTree.root.right = new a.Node(2);
aTree.root.right.left = new a.Node(9);
aTree.root.right.left.right = new a.Node(5);
aTree.root.right.right = new a.Node(7);

// console.log(aTree.root);
// console.log(maxDepth(aTree));

// const maxDepth = root => {
//     return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// }

// const maxDepth = root => {
//     if(!root) return 0;
//     let array = [];

//     const preOrder = (node, depth) => {
//         if (!node) return;

//         depth += 1;
//         if (!node.left && !node.right) { array.push(depth); }
//         if (node.left) preOrder(node.left, depth);
//         if (node.right) preOrder(node.right, depth);
//     };

//     preOrder(root, 0);
//     return Math.max.apply(null, array);
// };

module.exports = maxDepth;
