// Given a string s, return true if a permutation of the string could form a palindrome.

var canPermutePalindrome = function (s) {
  const hash = {};
  for (const char of s) {
    if (hash[char]) {
      delete hash[char];
    } else {
      hash[char] = true;
    }
  }

  return Object.keys(hash).length <= 1;
};

// Example 1:
// Input: s = "code"
// Output: false

// Example 2:
// Input: s = "aab"
// Output: true

// Example 3:
// Input: s = "carerac"
// Output: true