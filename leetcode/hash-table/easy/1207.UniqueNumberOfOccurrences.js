// Given an array of integers arr, write a function that returns true if and only if 
// the number of occurrences of each value in the array is unique.

var uniqueOccurrences = function (arr) {
  const hash = {};

  for (const num of arr) {
    if (!hash[num]) {
      hash[num] = 1;
    } else {
      hash[num]++;
    }
  }

  const freq = Object.values(hash);
  const set = new Set(freq);

  return freq.length === set.size;
};

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000