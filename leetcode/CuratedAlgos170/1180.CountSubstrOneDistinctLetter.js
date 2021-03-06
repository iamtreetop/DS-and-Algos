// Given a string S, return the number of substrings that have 
// only one distinct letter.

var countLetters = function(S) {
  // 2 pointer approach
  // set counter to 0
  // set left and right pointers to zero
  if (!S.length) return 0;
  
  let count = 1;
  for (let l = 0, r = 1; r < S.length; r++) {
    if (S[r] === S[r-1]) {
      count += (r - l + 1);
    } else {
      l = r
      count++;
    }
  }
  return count;
};

// Example 1:
// Input: S = "aaaba"
// Output: 8
// Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
// "aaa" occurs 1 time.
// "aa" occurs 2 times.
// "a" occurs 4 times.
// "b" occurs 1 time.
// So the answer is 1 + 2 + 4 + 1 = 8.

// Example 2:
// Input: S = "aaaaaaaaaa"
// Output: 55