function bubbleSort(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < array.length; i++) {
      let currEle = array[i];
      let nextEle = array[i + 1];
      if (currEle > nextEle) {
        swap(array, i, i + 1);
        sorted = false;
      }
    }
  }
  return array;
};

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
};