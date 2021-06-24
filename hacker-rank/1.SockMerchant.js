// There is a large pile of socks that must be paired by color. Given an array of integers 
// representing the color of each sock, determine how many pairs of socks with matching colors 
// there are.

function sockMerchant(n, ar) {
  const hash = {};
  let count = 0;
  for (const num of ar) {
    hash[num] = hash[num] + 1 || 1;
  }

  // { '10': 4, '20': 3, '30': 1, '50': 1 }
  for (const key in hash) {
    hash[key] = Math.floor(hash[key] / 2);
    count += hash[key];
  }
  return count;
}

// Example
// n = 7
// ar = [1,2,1,2,1,3,2]
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of 
// each color. The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):
// int n: the number of socks in the pile
// int ar[n]: the colors of each sock

// Returns
// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.