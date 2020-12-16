// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
// determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

// strategy: dynamic programming; tabulation
// Time: 0(n3). two nested loops, and substring
// Space: O(n). length of array is n+1
var wordBreak = function(s, wordDict) {
    // create table based on input size of s
    // initialize table with all falses
    let table = new Array(s.length + 1).fill(false);
    // initialize first entry of table (answer to smallest trivial problem)
    table[0] = true;
    // iterate through possible starting points
    for (let i = 0; i < table.length; i++) {
        // if no possible words in dictionary at starting point, move to next satrting point
        if (table[i] === false) continue;
        // iterate over possible end points
        for (let j = i + 1; j < table.length; j++){
            // slice substring where i is tarting point, j is endpoint
            let word = s.slice(i,j);
            // if substring is in dictionary, do something
            if (wordDict.includes(word)) {
                table[j] = true;
            }
        }
    }

    return table[table.length -1];
};

// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false