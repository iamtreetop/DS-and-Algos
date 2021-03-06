// Given a string licensePlate and an array of strings words, find the shortest completing 
// word in words.

// A completing word is a word that contains all the letters in licensePlate. Ignore numbers 
// and spaces in licensePlate, and treat letters as case insensitive. If a letter appears 
// more than once in licensePlate, then it must appear in the word the same number of times 
// or more.

// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), 
// and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

// Return the shortest completing word in words. It is guaranteed an answer exists. If there 
// are multiple shortest completing words, return the first one that occurs in words.

 var shortestCompletingWord = function (licensePlate, words) {
   let hash = {};
   let license = licensePlate.toLowerCase();

   for (const char of license) {
     alpha = "abcdefghijklmnopqrstuvwxyz";
     if (!alpha.includes(char)) continue;

     !hash[char] && alpha.includes(char) ? (hash[char] = 1) : hash[char]++;
   }

   const validWords = [];

   for (const word of words) {
     if (isValidWord(hash, word)) validWords.push(word);
   }

   let min = Math.min(...validWords.map((word) => word.length));
   let filtered = validWords.filter((word) => word.length === min);

   return filtered[0];
 };

 const isValidWord = (hash, word) => {
   const newHash = {};

   for (const char of word) {
     newHash[char] = (newHash[char] || 0) + 1;
   }

   for (const char in hash) {
     if (!newHash[char] || newHash[char] < hash[char]) return false;
   }

   return true;
 };

 var shortestCompletingWord2 = function (licensePlate, words) {
   // Object to hold the shortest word that matches
   let match = { found: false, word: "" };

   // Char array to hold the upper case characters we want to match
   let licensePlateChars = licensePlate
     .toUpperCase()
     .replace(/[^A-Z]/g, "")
     .split("");

   words.forEach(function (word) {
     // if we already have a match make sure that the word we are checking is shorter
     if (!match.found || word.length < match.word.length) {
       let replaceWord = word.toUpperCase();

       // Loop over each character in the license plate and replace one at a time
       // the key here is that replace will only replace 1 S even if there are 2
       licensePlateChars.forEach(function (lChar) {
         replaceWord = replaceWord.replace(lChar, "");
       });

       // We know the word works if the length of the word minus
       // the length of chars equals the length of the new word
       if (word.length - licensePlateChars.length === replaceWord.length) {
         match.found = true;
         match.word = word;
       }
     }
   });

   return match.word;
 };

// Example 1:
// Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
// Output: "steps"
// Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
// "step" contains 't' and 'p', but only contains 1 's'.
// "steps" contains 't', 'p', and both 's' characters.
// "stripe" is missing an 's'.
// "stepple" is missing an 's'.
// Since "steps" is the only word containing all the letters, that is the answer.

// Example 2:
// Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
// Output: "pest"
// Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.

// Example 3:
// Input: licensePlate = "Ah71752", words = ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]
// Output: "husband"

// Example 4:
// Input: licensePlate = "OgEu755", words = ["enough","these","play","wide","wonder","box","arrive","money","tax","thus"]
// Output: "enough"

// Example 5:
// Input: licensePlate = "iMSlpe4", words = ["claim","consumer","student","camera","public","never","wonder","simple","thought","use"]
// Output: "simple"

// Constraints:

// 1 <= licensePlate.length <= 7
// licensePlate contains digits, letters (uppercase or lowercase), or space ' '.
// 1 <= words.length <= 1000
// 1 <= words[i].length <= 15
// words[i] consists of lower case English letters.