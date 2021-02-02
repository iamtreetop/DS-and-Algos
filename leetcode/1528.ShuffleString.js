// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith 
// position moves to indices[i] in the shuffled string.

// Return the shuffled string.

var restoreString = function (s, indices) {
  let res = new Array(s.length)

  for (let i = 0; i < indices.length; i++) {
    const index = indices[i];
    const char = s.charAt(i);
    res[index] = char;
  }

  return res.join("")
};

var restoreString = function (s, indices) {
  let res = '';
  const map = new Map();

  for (let i = 0; i < indices.length; i++) {
    const index = indices[i];
    const char = s.charAt(i);
    map.set(index, char);
  }

  for (let i = 0; i < indices.length; i++) {
    res += map.get(i);
  }

  return res;
};

// Example 1:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// Example 2:
// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

// Example 3:
// Input: s = "aiohn", indices = [3,1,4,2,0]
// Output: "nihao"

// Example 4:
// Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
// Output: "arigatou"

// Example 5:
// Input: s = "art", indices = [1,0,2]
// Output: "rat"