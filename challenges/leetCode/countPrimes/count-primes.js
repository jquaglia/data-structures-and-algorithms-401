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

// const countPrimes = n => {
//   const isPrime = Array(n).fill(true);
//   let count = 0;

//   for (let i = 2; i < n; i++) {
//     if (isPrime[i]) {
//       count++;
//       for (let j = i; j < n; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }

//   return count;
// }

// const countPrimes = n => {
//   const isPrime = Array(n).fill(0);
//   let primes = [];

//   for (let i = 2; i < n; i++) {
//     if (isPrime[i] === 0) {
//       isPrime[i] = i;
//       primes.push(i);
//     }
//     for (let j = 0; j < primes.length && primes[j] <= isPrime[i] && i * primes[j] < n; j++) {
//       isPrime[i * primes[j]] = primes[j];
//     }
//   }

//   return primes.length;
// }

// const countPrimes = n => {
//   const nums = new Uint8Array(n).fill(1);
//   const limit = Math.floor(Math.sqrt(n - 1));

//   nums[0] = 0;
//   nums[1] = 0;

//   for (let i = 2; i <= limit; i++) {
//     if (nums[i]) {
//       for (let j = i + i; j < n; j += i) {
//         nums[j] = 0;
//       }
//     }
//   }
//   return nums.reduce((sum, curr) => sum + curr, 0);
// }

// const countPrimes = n => {
//   let isPrime = new Array(n).fill(true);
//   isPrime[1] = false;
//   for (let i = 2; i * i < n; i++) {
//     if (!isPrime[i]) continue;
//     for (let j = i * i; j < n; j += i) isPrime[j] = false;
//   }

//   let count = 0;
//   for (let i = 1; i < n; i++) {
//     if (isPrime[i]) count++;
//   }
//   return count;
// }

const countPrimes = n => {
  let count = 0;

  loop1: for (let i = 2; i < n; i++) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) continue loop1;
    }
    count++;
  }
  return count;
}

console.log(countPrimes(10));

