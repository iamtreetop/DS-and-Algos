// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays 
// and you may return the result in any order.

var intersect = function (nums1, nums2) {
  const hash = {};

  for (const num of nums1) {
    hash[num] = (hash[num] || 0) + 1;
  }

  let res = [];

  for (const num of nums2) {
    if (hash[num] > 0) {
      res.push(num);
      hash[num]--;
    }
  }

  return res;
};

var intersect = function (nums1, nums2) {
  let arr1 = nums1.sort((a, b) => a - b);
  let arr2 = nums2.sort((a, b) => a - b);
  let res = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] === arr2[0]) {
      res.push(arr1.shift());
      arr2.shift();
    } else if (arr1[0] < arr2[0]) {
      arr1.shift();
    } else {
      arr2.shift();
    }
  }

  return res;
};

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.