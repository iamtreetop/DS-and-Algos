// Time: O(n) Time | O(n) Space, where n is length of array
function isValidSubsequence(array, sequence) {
  let arrayIdx = 0;
  let seqIdx = 0;

  while (arrayIdx < array.length && seqIdx < sequence.length) {
    if (array[arrayIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrayIdx++;
  }
  return seqIdx === sequence.length;
};

function isValidSubsequence2(array, sequence) {
  let seqIdx = 0;

  for (let num of array) {
    if (seqIdx === sequence.length) {
      break;
    }
    if (sequence[seqIdx] === num) {
      seqIdx++;
    }
  };
  return seqIdx === sequence.length;
}

arr = [5,1,22,25,6,-1,8,10],
seq = [1,6,-1,10]
isValidSubsequence(arr, seq)  // => true