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

// var maxSubArray = function (nums) {
//   let globalBig = -20;
//   let result = [];
//   let localBig = 0;

//   for (let i = 0; i < nums.length; i++) {
//     localBig = nums[i];
//     // console.log(localBig);
//     for (let j = i + 1; j < nums.length - (i + 1); j++) {
//       localBig += nums[j];
//       console.log(localBig);
//       if (localBig > globalBig) {
//         globalBig = localBig;
//         result.push(nums[j]);
//       }
//     }
//   }
//   console.log(result);
//   return globalBig;
// };

var maxSubArray = function (nums) {
  let maxSum = -20;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k < j; k++) {
        sum += nums[k];
      }
      if (sum > maxSum) { maxSum = sum; }
    }
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
