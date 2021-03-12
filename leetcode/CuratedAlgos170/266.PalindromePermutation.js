// Given a string s, return true if a permutation of the string 
// could form a palindrome.

var canPermutePalindrome = function(s) {
  const seen = new Set();
  
  for (const char of s) {
    if (!seen.has(char)) {
      seen.add(char)
    } else {
      seen.delete(char)
    }
  }
  
  return seen.size <= 1
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