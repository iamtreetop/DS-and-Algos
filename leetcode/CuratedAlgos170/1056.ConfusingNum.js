// Given a number N, return true if and only if it is a confusing number, 
// which satisfies the following condition:

// We can rotate digits by 180 degrees to form new digits. 
// When 0, 1, 6, 8, 9 are rotated 180 degrees, they become 
// 0, 1, 9, 8, 6 respectively. When 2, 3, 4, 5 and 7 are rotated 180 degrees, 
// they become invalid. A confusing number is a number that when rotated 
// 180 degrees becomes a different number with each digit valid.

var confusingNumber = function (N) {
  // brute force
  // 0,1,6,8,9 -> 0,1,9,8,6
  // 2,3,4,5,7 -> invalid
  // 1. Separate the digits
  // 2. Find rotated digit (look up dictionary, if not found - invalid)
  // 3. Reverse order
  // 4. Check if new number is different
  const confusingNums = {
    0: 0,
    1: 1,
    2: 'invalid',
    3: 'invalid',
    4: 'invalid',
    5: 'invalid',
    6: 9,
    7: 'invalid',
    8: 8,
    9: 6
  };

  let digits = N.toString().split("").reverse();

  digits.forEach((digit, index) => {
    if (confusingNums[digit]) {
      digits[index] = confusingNums[digit];
    }
  });

  if (!digits.includes("invalid")) {
    digits = digits.join("");
    if (digits != N) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Example 1:
// Input: 6
// Output: true
// Explanation: 
// We get 9 after rotating 6, 9 is a valid number and 9!=6.

// Example 2:
// Input: 89
// Output: true
// Explanation: 
// We get 68 after rotating 89, 86 is a valid number and 86!=89.

// Example 3:
// Input: 11
// Output: false
// Explanation: 
// We get 11 after rotating 11, 11 is a valid number but the value remains 
// the same, thus 11 is not a confusing number.

// Example 4:
// Input: 25
// Output: false
// Explanation: 
// We get an invalid number after rotating 25.
 

// Note:

// 0 <= N <= 10^9
// After the rotation we can ignore leading zeros, for example if 
// after rotation we have 0008 then this number is considered as just 8.