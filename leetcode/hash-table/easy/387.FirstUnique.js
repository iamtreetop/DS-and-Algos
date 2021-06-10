// Given a string s, return the first non-repeating character in it and return its index. 
// If it does not exist, return -1.

var firstUniqChar = function (s) {
  const hash = {};

  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }

  return -1;
};

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1