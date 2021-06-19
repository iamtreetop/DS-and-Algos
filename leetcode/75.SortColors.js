// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of 
// the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function (nums) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let left = 0;
  let right = nums.length - 1;
  let i = 0;

  while (i <= right) {
    const n = nums[i];
    if (n === 0) {
      swap(i, left);
      left++;
      i++;
    } else if (n === 2) {
      swap(i, right);
      right--;
    } else {
      i++;
    }
  }
};

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// Example 3:
// Input: nums = [0]
// Output: [0]

// Example 4:
// Input: nums = [1]
// Output: [1]