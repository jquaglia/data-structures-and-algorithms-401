'use strict';

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// const containsDuplicate = nums => {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) return true;
//     else map.set(nums[i], nums[i]);
//   }
//   return false;
// };

// const containsDuplicate = nums => {
//   if ([...new Set(nums)].length === nums.length)
//     return false;
//   return true;
// };

const containsDuplicate = nums => {
  let set = new Set();

  for (let num in nums) {
    if (set.has(nums[num])) { return true; }
    else { set.add(nums[num]); }
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
