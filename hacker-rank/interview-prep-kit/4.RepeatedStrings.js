// There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n,
// find and print the number of letter a's in the first n letters of the infinite string.

function repeatedString(s, n) {
  // track number of a's
  let countAs = 0;

  // if n is greater than string's length
  if (n >= s.length) {
    for (const char of s) {
      if (char === "a") countAs++;
    }
    // multiply number of full repeated strings
    countAs *= Math.floor(n / s.length);
  }

  for (let i = 0; i < n % s.length; i++) {
    const char = s[i];
    if (char === "a") countAs++;
  }

  return countAs;
}

// Example
// s = 'abcac'
// n = 10

// The substring we consider is 'abcacabcac', the first  characters of the infinite string. There are 4 occurrences
// of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

// Returns

// int: the frequency of a in the substring
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

// Sample:
// s: aba
// n: 10
// output: 7

// The first n=10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we return 7.

// Sample:
// s: a
// n: 1000000000000
// output: 1000000000000

// The first n = 1000000000000 letters of the infinite string are a, we return 1000000000000.
