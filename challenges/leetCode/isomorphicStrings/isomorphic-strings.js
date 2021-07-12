'use strict';

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// const isIsomorphic = (s, t) => {
//   const hash = {};
//   // const hash2 = {};
//   for (let i = 0; i < s.length; i++) {
//     if (hash[s[i]] /*|| hash2[t[i]]*/) {
//       if (hash[s[i]] !== t[i]) return false;
//       // if (hash2[t[i]] !== s[i]) return false;
//     }
//     else {
//       hash[s[i]] = t[i];
//       // hash2[t[i]] = s[i];
//     }
//   }
//   return true;
// };

// const isIsomorphic = (s, t) => {
//   let hash = {};
//   let used = {};
//   for (let i = 0; i < s.length; i++) {
//     if (!hash[s[i]]) {
//       if (used[t[i]]) return false;
//       hash[s[i]] = t[i];
//       used[t[i]] = s[i];
//     }
//     else {
//       if (hash[s[i]] !== t[i]) return false;
//     }
//   }
//   return true;
// };

const isIsomorphic = (s, t) => {
  let hash = {};
  let used = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== used[t[i]]) return false;
    hash[s[i]] = i;
    used[t[i]] = i;
  }
  return true;
};

console.log(isIsomorphic('badc', 'baba'));
