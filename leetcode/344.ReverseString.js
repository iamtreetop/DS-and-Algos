// Write a function that reverses a string. The input string is given as an array of 
// characters char[].

// Do not allocate extra space for another array, you must do this by modifying 
// the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

var reverseString = function (s) {
  return s.reverse();
};

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let char = s[left];

    s[left] = s[right];
    s[right] = char;

    left++;
    right--;
  }

  return s;
};

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]