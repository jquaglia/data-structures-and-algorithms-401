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
  let sorted = nums.sort((a, b) => b - a);

  while (sorted.length > 2) {
    let one = sorted[0];
    let two = sorted[1];
    let three = sorted[2];

    if (two + three > one) return two + three + one;
    else { sorted.shift(); }
  }

  return 0;
};

// Heron's formula
// const largestPerimeter = nums => {
//   const sorted = nums.sort((a, b) => b - a);

//   for (let i = 0; i < sorted.length - 2; i++) {
//     let a = sorted[i];
//     let b = sorted[i + 1];
//     let c = sorted[i + 2];
//     let semiPerim = (a + b + c) / 2;
//     if (semiPerim * (semiPerim - a) * (semiPerim - b) * (semiPerim - c) > 0) {
//       return semiPerim * 2;
//     }
//   }
//   return 0;
// };

console.log(largestPerimeter([3, 6, 2, 3]));
