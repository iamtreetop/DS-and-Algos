// Given an array of strings wordsDict and two different strings 
// that already exist in the array word1 and word2, return the 
// shortest distance between these two words in the list.

var shortestDistance = function(wordsDict, word1, word2) {
  let pos1 = null;
  let pos2 = null;
  let minDist = Infinity
  
  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      pos1 = i;
    }
    if (wordsDict[i] === word2) {
      pos2 = i;
    }
    
    if (pos1 !== null && pos2 !== null)
      minDist = Math.min(minDist, Math.abs(pos1 - pos2))
      if (minDist === 1) {
        return minDist;
     }
  }
  return minDist;
};

// Example 1:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3

// Example 2:
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1