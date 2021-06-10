// You are given a string allowed consisting of distinct characters and
// an array of strings words. A string is consistent if all characters in
// the string appear in the string allowed.

// Return the number of consistent strings in the array words.

var countConsistentStrings = function (allowed, words) {
  // initialize counter to words.length
  // walk over each word of array
    // walk over each char of word
      // if char is not allowed, decrement counter
      // break out of loop
  // return counter

  let counter = words.length;

  for (let word of words) {
    for (let char of word) {
      if (!allowed.includes(char)) {
        counter--;
        break;
      }
    }
  }
  return counter;
};

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain
// characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

// Constraints:
// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.
