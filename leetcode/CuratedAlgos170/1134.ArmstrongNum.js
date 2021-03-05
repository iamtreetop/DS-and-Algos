// The k-digit number N is an Armstrong number if and only if the k-th 
// power of each digit sums to N.

// Given a positive integer N, return true if and only if it is an Armstrong number.

var isArmstrong = function (N) {
  // turn N to string, then split to array of nums
  // store array.length
  // if each num ^ stored array.length === N return true

  let digits = N.toString().split(""); // ["1","5","3"]
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
      let currDigit = parseInt(digits[i]);
      sum = sum + Math.pow(currDigit, digits.length);
  }

  return sum === N;
};

// Example 1:
// Input: 153
// Output: true
// Explanation: 
// 153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3.

// Example 2:
// Input: 123
// Output: false
// Explanation: 
// 123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 36.
 