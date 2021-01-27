// O(n) time | O(n) space - where n in length of input string
function runLengthEncoding(string) {
  let resArr = [];
  let count = 1;

  for (let i = 1; i < string.length; i++) {
    const char = string[i];
    const prevChar = string[i - 1];

    if (char !== prevChar || count === 9) {
      resArr.push(count.toString());
      resArr.push(prevChar);
      count = 0;
    }
    count++;
  }
  resArr.push(count.toString());
  resArr.push(string[string.length - 1]);

  return resArr.join("");
};
