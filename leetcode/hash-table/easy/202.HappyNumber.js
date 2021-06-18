// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly 
// in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

var isHappy = function (n) {
  // loop til total is found or total is 1
  const seen = {};

  while (n !== 1) {
    let digits = getDigits(n);
    n = getSquareTotal(digits);

    if (seen[n]) {
      return false;
    } else {
      seen[n] = true;
    }
  }

  return true;
};

const getDigits = (num) => {
  // split the current number to get digits
  let digits = num
    .toString()
    .split("")
    .map((n) => Number(n));
  return digits;
};

const getSquareTotal = (digits) => {
  // square the digits
  let sum = 0;
  for (const digit of digits) {
    sum += digit * digit;
  }
  return sum;
};

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1