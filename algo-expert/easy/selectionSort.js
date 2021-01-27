// Best: O(n^2) time | O(1) space
// Avg: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    swap(array, i, minIndex);
  }
  return array;
};

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};
