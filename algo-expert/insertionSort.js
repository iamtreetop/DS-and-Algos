// Best O(n) time | O(1) space;
// Avg: O(n^2) time | O(1) space;
// Worst: O(n^2) time | O(1);
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currElement = array[i];
    for (let j = i - 1; j >= 0 && currElement < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currElement;
  }
  return array;
};