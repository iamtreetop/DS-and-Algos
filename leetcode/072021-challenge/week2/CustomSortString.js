// order and str are strings composed of lowercase letters. In order, no letter occurs more than once.

// order was sorted in some custom order previously. We want to permute the characters of str so that 
// they match the order that order was sorted. More specifically, if x occurs before y in order, then 
// x should occur before y in the returned string.

// Return any permutation of str (as a string) that satisfies this property.

var customSortString = function (order, str) {
  let hash = {},
    res = "";

  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = (hash[str[i]] || 0) + 1;
  }

  for (let i = 0; i < order.length; i++) {
    res += order[i].repeat(hash[order[i]]);
    delete hash[order[i]];
  }

  let keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i++) {
    res += keys[i].repeat(hash[keys[i]]);
  }

  return res;
};

// Example:
// Input: 
// order = "cba"
// str = "abcd"
// Output: "cbad"
// Explanation: 
// "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", 
// "cbda" are also valid outputs.
 

// Note:

// order has length at most 26, and no character is repeated in order.
// str has length at most 200.
// order and str consist of lowercase letters only.