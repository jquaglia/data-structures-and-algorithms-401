'use strict';

// Count the number of prime numbers less than a non-negative number, n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Example 2:
// Input: n = 0
// Output: 0

// Example 3:
// Input: n = 1
// Output: 0

// const countPrimes = n => {
//   let primes = 0;
//   for (let i = 1; i <= n; i++) {
//     let counter = 0;
//     for (let j = 1; j < i; j++) {
//       if (i % j === 0 && i !== j) counter++;
//     }
//     if (counter === 1) primes++;
//   }

//   return primes;
// }

// const countPrimes = n => {
//   if (n < 4) return n === 3 ? 1 : 0;

//   let primes = [2];
//   for (let i = 2; i < n; i++) {
//     let counter = 0;
//     for (let j = 0; j < primes.length; j++) {
//       if (i % primes[j] === 0) counter++;
//     }
//     if (counter === 0) primes.push(i);
//   }

//   return primes.length;
// }

const countPrimes = n => {
  const isPrime = Array(n).fill(true);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;
      for (let j = i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return count;
}

console.log(countPrimes(10));

