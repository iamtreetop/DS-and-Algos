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
