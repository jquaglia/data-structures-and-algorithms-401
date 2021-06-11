'use strict';

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// Example 2:
// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

// Example 3:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e., max profit = 0.


// Algo -> calculate the highest profit. Buy and sell multiple times.
// eg. -> [7, 2, 5, 6, 8] Can I sell and buy on the same I value? if so, this should be straight forward. Just buy everything as long as it's lower than the next i

const maxProfit = prices => {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i];
        }
    }
    return profit;
};

// var fib = function(n) {
//     let arr = [0, 1];
    
//     for(let i = 2; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr[n];
// };
