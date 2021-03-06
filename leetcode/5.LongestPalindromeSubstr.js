// Given a string s, return the longest palindromic substring in s.

var longestPalindrome = function (s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const curr1 = bubbleOut(s, i, i);
    const curr2 = bubbleOut(s, i, i + 1);
    const currPal = curr1.length > curr2.length ? curr1 : curr2;
    if (currPal.length > longest.length) {
      longest = currPal;
    }
  }
  return longest;
};

const bubbleOut = (str, i, j) => {
  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i -= 1;
    j += 1;
  }
  return str.slice(i + 1, j);
};

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Example 3:
// Input: s = "a"
// Output: "a"

// Example 4:
// Input: s = "ac"
// Output: "a"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),