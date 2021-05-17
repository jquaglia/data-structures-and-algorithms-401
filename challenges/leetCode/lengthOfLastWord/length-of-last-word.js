'use strict';

// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5

// Example 2:

// Input: s = " "
// Output: 0

var lengthOfLastWord = function(s) {
  let length = 0;
  let string = s.trim();

  for (let i = 0; i < string.length; i++) {
    if(string[i] === ' ') { length = 0; }
    else { length++; }
  }

  return length;
};

module.exports = lengthOfLastWord;
