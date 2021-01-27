// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let resStr = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      resStr += " ";
      continue;
    }

    const newIdx = (alphabet.indexOf(string[i]) + key) % 26;
    resStr += alphabet[newIdx];
  }

  return resStr;
};