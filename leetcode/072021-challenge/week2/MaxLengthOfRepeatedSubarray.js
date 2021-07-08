// Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in 
// both arrays.


// Time (mn) | Space O(mn)
var findLengthDP = function (nums1, nums2) {
  const rows = nums1.length,
    cols = nums2.length;

  // set up dp array && prefill with 0's
  const dp = Array(rows + 1)
    .fill()
    .map(() => Array(cols).fill(0));

  let max = 0;
  // iterate over grid starting
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      // check previous
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max;
};

// Example 1:
// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].

// Example 2:
// Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// Output: 5