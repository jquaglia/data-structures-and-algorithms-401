'use strict';

// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// ALGO: use regex to get string to bare minimum with no extra spaces or characters. 2 pointers, start and end of string. They go through the string until they converge to confirm the value at each opposite index. If it gets through, return true, else false.


const string1 = 'A man, a plan, a canal: Panama';
const string2 = 'race a car';

// faster than 98% and less memory than 84%
// Big O -> Space: O(n), Time: O(n/2)?
const isPalindrome = s => {
    const string = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    let i = string.length - 1;
    let j = 0;
    while (i >= j) {
        if (string[i--] !== string[j++]) return false;
    }

    return true;
};

// const isPalindrome = s => {
//     if (!s.length) return true;

//     const stringArr = s.match(/[A-Za-z0-9]/g);

//     if(!stringArr) return true;

//     let i = stringArr.length - 1;
//     let j = 0;
//     while(i !== j - 1 && i !== j - 2) {
//         stringArr[i] = stringArr[i].toLowerCase();
//         stringArr[j] = stringArr[j].toLowerCase();

//         if(stringArr[i] !== stringArr[j]) return false;
//         i--;
//         j++;
//     }

//     return true;
// };

// console.log(isPalindrome(string2));