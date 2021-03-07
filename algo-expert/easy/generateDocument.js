function generateDocument(characters, document) {
  const charCounts = {};
	
	for (const char of characters) {
		if(!(char in charCounts)) charCounts[char] = 0;
		charCounts[char]++;
	}
	
	for (const char of document) {
		if(!(char in charCounts) || charCounts[char] === 0) return false;
		
		charCounts[char]--;
	}
	return true
}