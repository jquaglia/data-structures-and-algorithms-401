'use strict';

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let prefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if(strs[0][i] === strs[j][i]) {
        continue;
      } else { return prefix; }
    }
    prefix += strs[0][i];
  }
  return prefix;
};

// var longestCommonPrefix = function (strs) {
//   if (strs === undefined || strs.length === 0) { return ''; }
//   //                  accu, value
//   return strs.reduce((prev, next) => {
//     let i = 0;
//     while (prev[i] && next[i] && prev[i] === next[i]) i++;
//     return prev.slice(0, i);
//   });
// };

// var longestCommonPrefix = function (strs) {

//   let lcp = '';
//   if (!strs || !strs.length) return lcp;

//   // sorting array alphabetically 
//   strs.sort()

//   for (let i = 0; i < strs[0].length; ++i) {
//     if (strs[0][i] !== strs[strs.length - 1][i]) {    // comparing only first and last item
//       break;
//     } else {
//       lcp += strs[0][i];
//     }
//   }
//   return lcp;
// };

const strs = ['dog', 'racecar', 'car'];
const strings = ['flower', 'flow', 'flowight'];
console.log(longestCommonPrefix(strings));

module.exports = longestCommonPrefix;