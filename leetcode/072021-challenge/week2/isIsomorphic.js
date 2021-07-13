// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order 
// of characters. No two characters may map to the same character, but a character may map to itself.

var isIsomorphic = function (s, t) {
  if (s === t) return true;
  if (s.length !== t.length) return false;

  const sHash = {};
  const tHash = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (!sHash[sChar]) sHash[sChar] = tChar;
    if (!tHash[tChar]) tHash[tChar] = sChar;

    if (sHash[sChar] !== tChar || tHash[tChar] !== sChar) return false;
  }

  return true;
};

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.