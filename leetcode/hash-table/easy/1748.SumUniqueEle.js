// You are given an integer array nums. The unique elements of an array are 
// the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// create hash of frequency
// iterate of keys of hash
  // if value is 1, sum + value

var sumOfUnique = function (nums) {
  const hash = {};
  let sum = 0;
  for (num of nums) {
    if (!hash[num]) {
      hash[num] = 1;
    } else {
      hash[num]++;
    }
  }

  // for (const key in hash) {
  //   if (hash[key] === 1) {
  //     sum += Number(key);
  //   }
  // }
  Object.keys(hash)
    .filter((key) => hash[key] === 1)
    // .map((num) => (sum += parseInt(num)));
    .map((num) => (sum += +num));


  return sum;
};

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.