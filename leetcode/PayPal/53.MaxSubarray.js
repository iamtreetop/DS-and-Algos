// Given an integer array nums, find the contiguous subarray (containing at 
// least one number) which has the largest sum and return its sum.

var maxSubArray = function (nums) {
  // DP
  // store 2 variables; running max and curr max
  // walk over nums array
    // set running max to either current num or running max
    // set curr max to either curr max or running max
  // return curr max
  let runningMax = nums[0];
  let currMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    runningMax = Math.max(num, num + runningMax);
    currMax = Math.max(runningMax, currMax);
  }
  
  return currMax;
};

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [0]
// Output: 0

// Example 4:
// Input: nums = [-1]
// Output: -1

// Example 5:
// Input: nums = [-100000]
// Output: -100000