// Given an integer array nums sorted in non-decreasing order, return an array of the squares 
// of each number sorted in non-decreasing order.

var sortedSquaresTwoPointers = function (nums) {
  let arr = new Array(nums.length),
    left = 0,
    right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    let leftNum = Math.abs(nums[left]),
      rightNum = Math.abs(nums[right]);

    if (leftNum < rightNum) {
      arr[i] = Math.pow(nums[right], 2);
      right--;
    } else {
      arr[i] = Math.pow(nums[left], 2);
      left++;
    }
  }
  return arr;
};

var sortedSquares = function (nums) {
  let arr = nums.map((num) => num * num);

  return arr.sort((a, b) => a - b);
};

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.