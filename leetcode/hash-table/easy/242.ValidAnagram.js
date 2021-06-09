// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const hash = {};

  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }

  // for (const char of t) {
  //   hash[char] = (hash[char] || 0) - 1;
  // }

  // for (const [key, val] of Object.entries(hash)) {
  //   if (val !== 0) return false;
  // }
  for (const char of t) {
    if (!hash[char]) return false;
    hash[char]--;
  }

  return true;
};

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? 
// How would you adapt your solution to such a case?