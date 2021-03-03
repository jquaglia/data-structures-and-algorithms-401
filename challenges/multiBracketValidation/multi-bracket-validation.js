'use strict';

function multiBracketValidation(input) {
  let array = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let string = input.replace(/[a-zA-Z ]+/g, '');
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      array[array.length] = string[i];
    }
    else {
      let last = array.pop();
      if (string[i] !== map[last]) { return false; }
    }
  }
  if (array.length !== 0) { return false; }

  return true;

}

// console.log(multiBracketValidation('{}{Code}[Fellows](())'));
module.exports = multiBracketValidation;