// Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, 
// followed by all the odd elements of nums.

// You may return any answer array that satisfies this condition.

var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] % 2 === 1 && nums[right] % 2 === 0) {
      swap(nums, left, right);
      left++;
      right--;
    }

    if (nums[left] % 2 === 0) {
      left++;
      continue;
    }
    if (nums[right] % 2 !== 0) {
      right--;
      continue;
    }
  }
  return nums;
};

const swap = (array, i, j) => {
  let tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.