function frankenSplice(arr1, arr2, n) {
  arr2.splice(n, 0, ...arr1);
  const mixedArray = arr2.slice();
  arr2.splice(n, arr1.length);

  return mixedArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
