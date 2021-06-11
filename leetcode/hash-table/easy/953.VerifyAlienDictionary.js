// In an alien language, surprisingly they also use english lowercase letters, but possibly 
// in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, 
// return true if and only if the given words are sorted lexicographicaly in this alien language.

var isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      let firstIndex = order.indexOf(words[i][j]);
      let secondIndex = order.indexOf(words[i + 1][j]);
      if (firstIndex < secondIndex) {
        break;
      }
      if (firstIndex === secondIndex) {
        continue;
      }
      if (firstIndex > secondIndex) {
        return false;
      }
    }
  }
  return true;
};

var isAlienSorted = function (words, order) {
  let newMap = new Map();
  for (let i = 0; i < order.length; i++) {
    newMap.set(order[i], i);
  }

  for (let j = 1; j < words.length; j++) {
    let prev = words[j - 1];
    let curr = words[j];

    if (newMap.get(prev[0]) > newMap.get(curr[0])) {
      return false;
    } else if (prev[0] === curr[0]) {
      let pointer = 1;
      while (
        prev[pointer] === curr[pointer] &&
        pointer < Math.max(curr.length, prev.length)
      ) {
        pointer++;
      }
      if (
        (newMap.get(prev[pointer]) >= 0 && !newMap.get(curr[pointer])) ||
        newMap.get(prev[pointer]) > newMap.get(curr[pointer])
      ) {
        return false;
      }
    }
  }
  return true;
};
// Example 1:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

// Example 2:
// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

// Example 3:
// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) 
// According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the 
// blank character which is less than any other character (More info).
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.