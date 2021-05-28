'use strict';

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

const tree = require('../../tree/tree.js');

// var isSameTree = function (p, q) {
//     const pArr = [];
//     const qArr = [];

//     const preOrder = (node, arr) => {
//         if (!node) { return arr; }

//         arr.push(node.value);

//         if (node.left) { preOrder(node.left, arr); }
//         else { arr.push(null); }

//         if (node.right) { preOrder(node.right, arr); }
//         else { arr.push(null); }
//     };

//     preOrder(p.root, pArr);
//     preOrder(q.root, qArr);

//     if (pArr.length === qArr.length){
//         for (let i = 0; i < pArr.length; i++) {
//             if (pArr[i] !== qArr[i]) {
//                 return false;
//             }
//         }
//         return true;
//     } else { return false; }
// };

var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    return p.value === q.value
        && isSameTree(p.left, q.left)
        && isSameTree(p.right, q.right);
};



const aTree = new tree.BiTree();
const bTree = new tree.BiTree();
// aTree.root = new tree.Node(1);
// aTree.root.left = new tree.Node(2);
bTree.root = new tree.Node(0);
// bTree.root.left = new tree.Node(null);
// bTree.root.right = new tree.Node(2);

console.log(aTree, bTree);

console.log(isSameTree(aTree, bTree));


