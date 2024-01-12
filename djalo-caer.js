function dropElements(arr, func) {
  for (let i = 0; i <= arr.length; i++) {
    if (func(arr[i])) {
      const resultArray = arr.slice(i);
      return resultArray;
    }
  }

  return [];
}

dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; });