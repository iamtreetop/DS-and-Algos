// Given a string text, you want to use the characters of text to form as 
// many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number 
// of instances that can be formed.

var maxNumberOfBalloons = function (text) {
  let hash = {};
  let balloonCount = 0;

  for (let char of text) {
    !hash[char] ? (hash[char] = 1) : hash[char]++;
  }

  while (
    hash["b"] >= 1 &&
    hash["a"] >= 1 &&
    hash["l"] >= 2 &&
    hash["o"] >= 2 &&
    hash["n"] >= 1
  ) {
    balloonCount += 1;
    hash["b"]--;
    hash["a"]--;
    hash["l"] -= 2;
    hash["o"] -= 2;
    hash["n"]--;
  }
  return count;
};

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0


// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.