// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' 
// from it, and return the new string.

var removeVowels = function (s) {
  let vowels = new Set("aeiou");
  let str = "";

  for (let char of s) {
    if (vowels.has(char)) {
      continue;
    } else {
      str += char;
    }
  }
  return str;
};

// Example 1:
// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"

// Example 2:
// Input: s = "aeiou"
// Output: ""