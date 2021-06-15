// Given an array of n integers nums, a 132 pattern is a subsequence of three integers 
// nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

// Return true if there is a 132 pattern in nums, otherwise, return false.

var find132pattern = function (nums) {
  let stack = [];
  let min = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < min) return true;

    while (stack.length && nums[i] > stack[stack.length - 1]) {
      min = stack.pop();
    }

    stack.push(nums[i]);
  }
  return false;
};

var find132pattern = function (nums) {
  if (nums.length < 3) return false;

  let stack = [];
  let arr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    arr.push(Math.min(arr[arr.length - 1], nums[i]));
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > arr[i]) {
      while (stack.length && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length && stack[stack.length - 1] < nums[i]) {
        return true;
      }
      stack.push(nums[i]);
    }
  }

  return false;
};

// Example 1:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.

// Example 2:
// Input: nums = [3,1,4,2]
// Output: true
// Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

// Example 3:
// Input: nums = [-1,3,2,0]
// Output: true
// Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
 
// Constraints:

// n == nums.length
// 1 <= n <= 2 * 105
// -109 <= nums[i] <= 109