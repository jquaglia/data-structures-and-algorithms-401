'use strict';

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

var reverse = function (x) {
  const spread = [...Math.abs(x).toString()];
  let num = '';

  spread.forEach(digit => num = digit + num);
  const result = parseInt(num);

  return result > 0x7FFFFFFF ? 0 : x < 0 ? -result : result;
};

var reverse2 = function (x) {
  const reverse = +String(Math.abs(x)).split('').reverse().join('');

  if (reverse > 0x7FFFFFFF) {
    return 0;
  }

  return x < 0 ? -reverse : reverse;
};

var reverse3 = function (x) {
  let reverse = 0;
  let sign = x < 0;
  x = Math.abs(x);
  while (x) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverse > 0x7FFFFFFF ? 0 : sign ? -reverse : reverse;
};


// console.log(reverse3(1032938999));
// console.log(reverse3(-487));