
function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);

  let leftRunningProd = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] = leftRunningProd;
    leftRunningProd *= array[i];
  }

  let rightRunningProd = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= rightRunningProd;
    rightRunningProd *= array[i];
  }

  return products;
};

// Brute Force O(n^2) time | O(n^2) space
function arrayOfProducts(array) {
  const products = [];

  for (let i = 0; i < array.length; i++) {
    let runningProd = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        runningProd *= array[j];
      }
      products[i] = runningProd;
    }
  }
  return products;
};