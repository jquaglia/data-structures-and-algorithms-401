'use strict';

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0


// const sortedArray = [2, 3, 7, 8, 9, 11];

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  if (target < nums[start]) { return 0; }
  if (target > nums[end]) { return nums.length; }

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) { return mid; }

    if (nums[mid] > target) {
      if (nums[mid - 1] < target) { return mid; }
      end = mid - 1;
    }

    else if (nums[mid] < target) {
      if (nums[mid + 1] > target) { return mid + 1; }
      start = mid + 1;
    }
  }
};

module.exports = searchInsert;