// basically anagrams question
// time O(n+m) | space O(n) - where m and n are length of inputs, and c in hash
function generateDocument(characters, document) {
	const counts = {};
	
	for (const char of characters) {
		if (!(char in counts)) counts[char] = 0;
			counts[char]++;	
		}
	// console.log(counts)
	for (const char of document) {
		if (!(char in counts) || counts[char] === 0) return false;
		counts[char]--;
	}
	return true;
};

// characters = "Bste!hetsi ogEAxpelrt x ";
// document = "AlgoExpert is the Best!";
// output = true