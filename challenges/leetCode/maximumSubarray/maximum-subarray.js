'use strict';

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

var maxSubArray = function (nums) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxSum) { maxSum = sum; }
    }
  }

  return maxSum;
};

// var maxSubArray = function (nums) {
//   let maxSum = -20;

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum > maxSum) { maxSum = sum; }
//     }
//   }

//   return maxSum;
// };

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
