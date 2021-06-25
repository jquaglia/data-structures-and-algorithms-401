'use strict';

// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

// Example 4:
// Input: columnTitle = "FXSHRXW"
// Output: 2147483647

// This is fastest! BIG O -> TIME: O(n), SPACE: O(1)
const titleToNumber = columnTitle => {
  let result = 0;
  for (let i = 0; i < columnTitle.length - 1; i++) {
    result += columnTitle[i].charCodeAt(0) - 64;
    result *= 26;
  }
  result += columnTitle.charCodeAt(columnTitle.length - 1) - 64;
  return result;
};

// const titleToNumber = columnTitle => {
//   let result = 0;
//   for (let i = 0; i < columnTitle.length; i++) {
//     const remain = columnTitle[i].charCodeAt(0) - 64;
//     result = result * 26 + remain;
//   }

//   return result;
// };

console.log(titleToNumber('FXSHRXW'));
