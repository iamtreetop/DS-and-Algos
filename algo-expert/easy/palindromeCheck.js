function isPalindrome1(string) {
  return string === string.split("").reverse().join("");
};

// O(n^2) time | O(n) space
function isPalindrome2(string) {
  let reversedStr = '';
  for (let i = string.length -1; i >= 0; i--) {
    reversedStr += string[i];
  }
  return string === reversedStr;
};

// O(n) time | O(n) space
function isPalindrome3(string) {
  let reversed = [];
  for (let i = string.length -1; i >= 0; i--) {
    reversed.push(string[i]);
  }
  return string === reversed.join("");
};

// O(n) time | O(1) space
function isPalindrome4(string) {
  let p1 = 0;
  let p2 = string.length - 1;

  while (p1 < p2) {
    if (string[p1] !== string[p2]) return false;
    p1++;
    p2--;
  }
  return true;
};

