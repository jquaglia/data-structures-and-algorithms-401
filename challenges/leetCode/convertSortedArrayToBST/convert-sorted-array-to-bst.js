'use strict';

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.


// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.

const arr = [-10, -3, 0, 5, 9];

const sortedArrayToBST = nums => {
    if (!nums || nums.length === 0) return null;

    const helper = (left, right) => {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const current = new TreeNode(nums[mid]);

        current.left = helper(left, mid - 1);
        current.right = helper(mid + 1, right);

        return current;
    };

    return helper(0, nums.length - 1);
};

// const sortedArrayToBST = nums => {
// let mid = Math.floor(nums.length / 2);
// let midNumber = nums[midIndex];
// let tree = new TreeNode(nums[midIndex], null, null);

// const helper = (arr, start, end) => {
//     if (start > end) return null;

//     let mid = (start + end) / 2;
//     let node = new TreeNode(arr[mid]);

//     node.left = helper(arr, start, mid - 1);
//     node.right = helper(arr, mid + 1, end);

//     return node;
// };

// return helper(nums, 0, nums.length - 1);
// let i = midIndex;
// let j = midIndex;
// let current = tree;
// while (i >= 0 || j < nums.length) {
//     i--;
//     j++;
//     current.left = new TreeNode(nums[i]);
//     current.right = new TreeNode(nums[j]);
// }

// return midNumber;
// };

console.log(sortedArrayToBST(arr));