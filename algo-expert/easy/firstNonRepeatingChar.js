// brute force - nested loop
// O(n^2) time | O(1) space - where n is length of string
function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
		let dupeCheck = false;
		for (let j = 0; j < string.length; j++) {
			if (string[i] === string[j] && i !== j) dupeCheck = true;
		}
		
		if (!dupeCheck) return i;
	}
	return -1;
}

string = "abcdcaf"; // => "b"