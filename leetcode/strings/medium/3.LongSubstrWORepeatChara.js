// Given a string s, find the length of the longest substring without repeating 
// characters.

// time: O(n), dependent on length of string
// space: O(m), where m is subtring

var lengthOfLongestSubstring = function (s) {
  // iterate over str with 2 pointers
  // moving window approach
  // initializ a max counter
  // initialize a seen set
  // if char[p2] is not seen
  // increment max counter
  // add p2 to object
  // if p2-p1 > max ? max = p2-p1 : max = max
  // else delete char[p2] from seen
  // increment p1
  // return max

  let seen = new Set();
  let max = 0;
  let p1 = 0;
  let p2 = 0;

  while (p1 < s.length && p2 < s.length) {
    let start = s[p1];
    let check = s[p2];
    if (!seen.has(check)) {
      p2++;
      const currLength = p2 - p1;
      max = currLength > max ? currLength : max;
      seen.add(check);
    } else {
      seen.delete(start);
      p1++;
    }
  }
  return max;
};

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:
// Input: s = ""
// Output: 0
