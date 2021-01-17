// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

var numIdenticalPairs = function (nums) {
  // initialize counter
  // initialize obj
  // walk over nums
  // if currNum is not in seen, set key to 1
  // else increment key by 1
  // increment counter by key count
  // return counter

  let seen = {};
  let numPairs = 0;

  for (let num of nums) {
    if (seen[num] === undefined) {
      seen[num] = 1;
    } else {
      numPairs += seen[num];
      seen[num] += 1;
    }
  }
  return numPairs;

    // initialize counter
    // walk over nums array using nested for loop
    // if i === j, increament counter
    // return counter

    // let numPairs = 0;
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         const num1 = nums[i];
    //         const num2 = nums[j];
    //         if (num1 === num2) numPairs++;
    //     }
    // }
    // return numPairs;
};

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0