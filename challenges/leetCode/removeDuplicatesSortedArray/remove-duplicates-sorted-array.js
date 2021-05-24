'use strict';

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
// Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.

// TODO: remove duplicates from sorted array -> in place : output -> length of arr

// var removeDuplicates = function (nums) {
//   let hash = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     // console.log(hash[nums[i]]);
//     // console.log(nums);
//     if (hash.has(nums[i])) {
//       nums.splice(i, 1);
//       i--;
//     }
//     else if (!hash.has(nums[i])) {
//       hash.set(nums[i], nums[i]);
//     }
//   }
//   console.log(nums);
//   return nums.length;
// };

// found this on leetcode
// var removeDuplicates = function (nums) {
//   let j = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] != nums[i - 1]) {
//       nums[j++] = nums[i];
//     }
//   }

//   return j;
// };

var removeDuplicates = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};

// const numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(numbers));

module.exports = removeDuplicates;
