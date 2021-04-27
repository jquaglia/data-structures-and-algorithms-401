'use strict';

var hasPathSum = function (root, targetSum) {
  let result = false;

  const helper = (node, total) => {
    if (!node || result) {
      return;
    }

    total += node.value;

    if (!node.left && !node.right && total === targetSum) {
      result = true;
    }

    if (node.left) { helper(node.left, total); }
    if (node.right) { helper(node.right, total); }
  };

  helper(root, 0);
  return result;
};

// ========= this is the leetcode solution =========
// var hasPathSum = function (root, targetSum) {
//   let result = false;

//   const helper = (node, total) => {
//     if (!node || result) {
//       return;
//     }

//     total += node.val;

//     if (!node.left && !node.right && total === targetSum) {
//       result = true;
//     }

//     if (node.left) { helper(node.left, total); }
//     if (node.right) { helper(node.right, total); }
//   };

//   helper(root, 0);
//   return result;
// };

// write a function to validate whether or not two given strings are anagrams. (contain the same letters)

// Disregard spaces

// let stringOne = 'Eleven plus two';
// let stringTwo = 'Twelve plus one';

// function validateAnagrams(string, string2) {
//   let hash = {};
//   let hash2 = {};
  
//   for (let i = 0; i < string.length; i++) {
//     if(string[i] === ' '){
//       continue;
//     }

//     if(!hash[string[i].toLowerCase()]){ hash[string[i].toLowerCase()] = 0; }

//     hash[string[i].toLowerCase()] += 1;
//   }
  
//   for (let i = 0; i < string2.length; i++) {
//     if(string2[i] === ' '){
//       continue;
//     }

//     if(!hash2[string2[i].toLowerCase()]){ hash2[string2[i].toLowerCase()] = 0; }
    
//     hash2[string2[i].toLowerCase()] += 1;
//   }

//   for (let i = 0; i < string.length; i++) {
//     if (hash[string[i].toLowerCase()] !== hash2[string[i].toLowerCase()]) {
//       return false;
//     } else { continue; }
//   }
//   return true;
// }

// console.log(validateAnagrams(stringOne, stringTwo));

module.exports = hasPathSum;