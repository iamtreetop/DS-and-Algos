// Given a character array s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by a 
// single space.

// Your code must solve the problem in-place, i.e. without allocating extra space.

var reverseWords = function (s) {
  let reversed = s.reverse();

  let start = 0,
    end = 0;

  while (start < reversed.length) {
    while (reversed[end] !== " " && end < reversed.length) {
      end++;
    }
    reverseEles(reversed, start, end - 1);
    start = end + 1;
    end = start;
  }

  return reversed;
};

const reverseEles = (arr, start, end) => {
  while (start < end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++;
    end--;
  }
};

// Example 1:
// Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

// Example 2:
// Input: s = ["a"]
// Output: ["a"]