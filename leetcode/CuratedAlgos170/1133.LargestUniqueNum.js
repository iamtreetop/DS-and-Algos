// Given an array of integers A, return the largest integer that only occurs once.

// If no integer occurs once, return -1.



// Time: O(n) | Space: O(n)
var largestUniqueNumber = function(A) {
  // keep track of largestUniqueNum
  // store hash with keys to ele:count
  // walk over keys in hash
    // update max if freq of key is 1 && current key is greater than max
  // return max
  
  let maxNum = -1
  const countHash = {};
  
  for (const num of A) {
    if (!countHash[num]) {
      countHash[num] = 1;
    } else {
      countHash[num] += 1;
    }
  }
  
  // console.log(countHash)
  
  // for (const key in countHash) {
  //   if (countHash[key] === 1 && Number(key) > Number(maxNum)) {
  //     maxNum = key
  //   } 
  // }
  // return maxNum;
  const uniques = Object.keys(countHash).filter(key => countHash[key] === 1)
  // console.log(uniques)
  return uniques.pop() || -1
};

// Example 1:
// Input: [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: 
// The maximum integer in the array is 9 but it is repeated. 
// The number 8 occurs only once, so it's the answer.

// Example 2:
// Input: [9,9,8,8]
// Output: -1
// Explanation: 
// There is no number that occurs only once.