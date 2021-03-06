// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// You are given coins of different denominations and a total amount of money. 
// Write a function to compute the number of combinations that make up that amount. 
// You may assume that you have infinite number of each kind of coin.


// Time: O(N×amount), where N is a length of coins array.
// Space: O(1) to keep dp array.

var change = function(amount, coins, memo={}) {
    let key = amount + '-' + coins
    if (key in memo) return memo[key]
    // Base case, one way to return 0 change
    if (amount === 0) return 1;

    // start at the last coin, make sure not to user the coin again
    let currCoin = coins[coins.length -1];

    let total = 0
    // iterate through different amoutn of this one coin
    for (let q = 0; q * currCoin <= amount ; q++) {
        // recursive call but dont include the last coin used
        total += change(amount - (q * currCoin), coins.slice(0,-1), memo)
    }
    memo[key] = total;
    return memo[key];
};

// console.log(change(5, [1, 2, 5]))
// console.log(change(500, [1, 2, 5]))

// Example 1:
// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// Example 2:
// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.

// Example 3:
// Input: amount = 10, coins = [10] 
// Output: 1

// Note:
// You can assume that

// 0 <= amount <= 5000
// 1 <= coin <= 5000
// the number of coins is less than 500
// the answer is guaranteed to fit into signed 32-bit integer