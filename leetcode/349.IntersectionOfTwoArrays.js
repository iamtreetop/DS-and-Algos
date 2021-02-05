// Given two arrays, write a function to compute their intersection.

var intersection = function(nums1, nums2) {
  // create a set of unique nums for nums1 array
  // check each ele of nums2 array
    // if ele is in set1, push to result array
  // return array
  const set1 = new Set();
  for (let num of nums1) {
    set1.add(num)
  };
  
  let intersectionArray = [];
  for (let num of nums2) {
    if (set1.has(num)) {
      intersectionArray.push(num);
      set1.delete(num);
    }
  }
  
  return intersectionArray;
};

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.