// Given an array of size n, find the majority element. The majority element is 
// the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always 
// exist in the array.

// Input: [3,2,3]
// Output: 3

// Input: [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    // find the target count
    const targetCount = (nums.length / 2);
    const numCounts = {}
    // iterate through array
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        // count each ele in object
        if (numCounts[num]) {
            numCounts[num]++;
        } else {
            numCounts[num] = 1;
        }
        // if count > nums.length, return num
        if (numCounts[num] > targetCount) {
            return num;
        }
    }
};