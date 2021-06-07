// Given an array words of strings made only from lowercase letters, return a list
// of all characters that show up in all strings within the list (including duplicates).
// For example, if a character occurs 3 times in all strings but not 4 times,
// you need to include that character three times in the final answer.

// You may return the answer in any order.

var commonChars = function (words) {
  let common = [];
  const wordCheck = words[0];
  for (const char of wordCheck) {
    if (words.every((word) => word.indexOf(char) > -1)) {
      common.push(char);
      words = words.map((word) => word.replace(char, ""));
    }
  }
  return common;
};

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// Note:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.
