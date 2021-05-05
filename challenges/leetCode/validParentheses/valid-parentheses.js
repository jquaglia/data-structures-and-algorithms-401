'use strict';

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

var isValid = function (s) {
  const arr = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      arr.push(s[i]);
    }
    else {
      let last = arr.pop();
      if (s[i] !== map[last]) { return false; }
    }
  }

  if (arr.length !== 0) { return false; }

  return true;
};

// var isValid = function (s) {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     let c = s.charAt(i);
//     switch (c) {
//       case '(': stack.push(')');
//         break;
//       case '[': stack.push(']');
//         break;
//       case '{': stack.push('}');
//         break;
//       default:
//         if (c !== stack.pop()) { return false; }
//     }
//   }

//   return stack.length === 0;
// };

// const string = '(){';
// console.log(isValid(string));

module.exports = isValid;
