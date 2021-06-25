'use strict';

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

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
// Input: columnNumber = 1
// Output: "A"

// Example 2:
// Input: columnNumber = 28
// Output: "AB"

// Example 3:
// Input: columnNumber = 701
// Output: "ZY"

// Example 4:
// Input: columnNumber = 2147483647
// Output: "FXSHRXW"

// ALGO -> counts up to 26, sets letter

const convertToTitle = columnNumber => {
  let title = '';

  while (columnNumber !== 0) {
    const remain = columnNumber % 26;
    if (remain === 0) {
      title = String.fromCharCode(64 + 26) + title;
      columnNumber /= 26;
      columnNumber -= 1;
    }
    else {
      title = String.fromCharCode(64 + remain) + title;
      columnNumber -= remain;
      columnNumber /= 26;
    }
  }

  return title;
};

console.log(52 % 26);
console.log(52 / 26);
console.log('1', convertToTitle(52));
// console.log('2', convertToTitle(2147483647));
