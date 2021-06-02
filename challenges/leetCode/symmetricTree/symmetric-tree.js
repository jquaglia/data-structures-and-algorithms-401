'use strict';

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true


// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false


// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

const tree = require('../../tree/tree.js');

// const aTree = new tree.BiTree();
const bTree = new tree.BiTree();
// aTree.root = new tree.Node(1);
// aTree.root.left = new tree.Node(2);
bTree.root = new tree.Node(1);
bTree.root.left = new tree.Node(2);
bTree.root.right = new tree.Node(2);
bTree.root.left.left = new tree.Node(null);
bTree.root.left.right = new tree.Node(3);
bTree.root.right.left = new tree.Node(3);
bTree.root.right.right = new tree.Node(null);

var isSymmetric = function (root) {
    if (!root) return true;

    return checker(root.left, root.right);
};

const checker = (left, right) => {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    if (left.value !== right.value) return false;

    return checker(left.left, right.right) &&
    checker(left.right, right.left);
};

// var isSymmetric = function (root) {
//     if (!root) return true;
// const arr = [];

// const inOrder = (node, arr) => {
//     if (!node) { return arr; }

//     if (node.left) { inOrder(node.left, arr); }
//     // if (node.left === undefined) { arr.push(undefined); }
//     arr.push(node.value);
//     if (node.right) { inOrder(node.right, arr); }
//     // if (node.right === undefined) { arr.push(undefined); }
// };

// inOrder(root, arr);

// function reversedArray(arr) {
//     const result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result[result.length] = arr[i];
//     }
//     return result;
// }

// let reverse = reversedArray(arr);

// console.log(arr);
// console.log(reverse);
// let bool = true;

// for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] === reverse[i]) continue;
//     if (arr[i] !== reverse[i]) bool = false;
//     // return !!(arr[i] === reverse[i]);
// }
// return bool;
// };

console.log(bTree.root);

console.log(isSymmetric(bTree.root));
