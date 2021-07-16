// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

var fourSum = function (nums, target) {
  let res = [];
  if (nums.length < 4) return res;
  nums.sort((a, b) => a - b);

  // [ -2, -1, 0, 0, 1, 2 ]
  //    i,  j, l,       r

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1,
        right = nums.length - 1;

      while (left < right) {
        let currentSum = nums[i] + nums[j] + nums[left] + nums[right];
        if (currentSum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (currentSum < target) {
          left++;
        } else {
          right--;
        }
      }

      while (nums[j] === nums[j + 1]) j++;
    }

    while (nums[i] === nums[i + 1]) i++;
  }

  return res;
};

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109