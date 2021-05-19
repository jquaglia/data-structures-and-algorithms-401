'use strict';

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function (a, b) {
  let a2 = BigInt(`0b${a}`);
  let b2 = BigInt(`0b${b}`);

  return (a2 + b2).toString(2);
};

// var addBinary = function (a, b) {
//   const aBin = `0b${a}`;
//   const bBin = `0b${b}`;
//   console.log(aBin);
//   const sum = BigInt(aBin) + BigInt(bBin);
//   console.log(sum);
//   return sum.toString(2);
// };

let a = '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101';

let b = '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011';

// console.log(addBinary(a, b));

module.exports = addBinary;
