'use strict';

var isPalindrome = function (x) {
  let reverse = 0;
  let y = Math.abs(x);

  if (x < 0) { return false; }
  console.log(y);

  while (y) {
    reverse = reverse * 10 + (y % 10);
    y = Math.floor(y / 10);
  }

  return reverse === x ? true : false;
};

module.exports = isPalindrome;
