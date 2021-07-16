'use strict';

// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

// Example 1:
// Input: nums = [2,1,2]
// Output: 5

// Example 2:
// Input: nums = [1,2,1]
// Output: 0

// Example 3:
// Input: nums = [3,2,3,4]
// Output: 10

// Example 4:
// Input: nums = [3,6,2,3]
// Output: 8

const largestPerimeter = nums => {
  if (nums.length < 3) return 0;

  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;

  for (let num of nums) {
    if (num > one) {
      five = four;
      four = three;
      three = two;
      two = one;
      one = num;
    }
    else if (num > two) {
      five = four;
      four = three;
      three = two;
      two = num;
    }
    else if (num > three){
      five = four;
      four = three;
      three = num;
    }
    else if (num > four){
      five = four;
      four = three;
    }
    else if (num > five){
      five = num;
    }
  }

  while (two + three <= one) {
    four = five;
    three = four;
    two = three;
    one = two;
  }

  return one < 1 || two < 1 || three < 1 ? 0 : one + two + three;
};

console.log(largestPerimeter([1, 2, 1]));
