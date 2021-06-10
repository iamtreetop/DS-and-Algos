// Given a string s which consists of lowercase or uppercase letters, return the length of 
// the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

var longestPalindrome = function (s) {
  let maxLength = 0;
  const hash = {};

  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
    if (hash[char] % 2 === 0) maxLength += 2;
  }

  return s.length > maxLength ? maxLength + 1 : maxLength;
};

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1

// Example 3:
// Input: s = "bb"
// Output: 2