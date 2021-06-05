'use strict';

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

//     a binary tree in which the left and right subtrees of every node differ in height by no more than 1.



// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:
// Input: root = []
// Output: true

const a = require('../../tree/tree.js');

const tree = new a.BiTree();
tree.root = new a.Node(1);
// tree.root.left = new a.Node(9);
tree.root.right = new a.Node(20);
// tree.root.right.left = new a.Node(15);
tree.root.right.right = new a.Node(7);
// tree.root.right.left.right = new a.Node(5);


const isBalanced = root => {
    let result = true;

    const helper = node => {
        if (!node) return 0;

        const left = helper(node.left);
        const right = helper(node.right);
        if (Math.abs(left - right) > 1) result = false;

        return 1 + Math.max(left, right);
    };

    helper(root);
    return result;
};

console.log(tree.root);

console.log(isBalanced(tree.root));
