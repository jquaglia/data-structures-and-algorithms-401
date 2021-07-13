'use strict';

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// const containsNearbyDuplicate = (nums, k) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) {
//         if (Math.abs(i - j) <= k) {
//         return true;
//         }
//       }
//     }
//   }
//   return false;
// };

const containsNearbyDuplicate = (nums, k) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(map.get(nums[i]) - i) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};

const containsNearbyDuplicate = (nums, k) => {
  let window = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) return true;
    window.add(nums[i]);
    if (i >= k) window.delete(nums[i - k]);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
