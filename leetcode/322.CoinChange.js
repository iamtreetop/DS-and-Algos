// You are given an integer array coins representing coins of different denominations and an 
// integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of 
// money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

var coinChange = function (coins, amount) {
  let table = new Array(amount + 1).fill(Infinity);

  table[0] = 0;

  for (let coin of coins) {
    for (let coinValue = coin; coinValue < table.length; coinValue++) {
      let dpIdx = coinValue - coin;
      let attempt = table[dpIdx] + 1;
      if (attempt < table[coinValue]) table[coinValue] = attempt;
    }
  }
  return table[amount] !== Infinity ? table[amount] : -1;
};

var coinChange = function (coins, amount) {
  let table = new Array(amount + 1).fill(Infinity);

  table[0] = 0;

  for (let coin of coins) {
    for (let amount = 0; amount < table.length; amount++) {
      if (coin <= amount) {
        table[amount] = Math.min(table[amount], table[amount - coin] + 1);
      }
    }
  }
  return table[amount] !== Infinity ? table[amount] : -1;
};

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Example 4:
// Input: coins = [1], amount = 1
// Output: 1

// Example 5:
// Input: coins = [1], amount = 2
// Output: 2
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104