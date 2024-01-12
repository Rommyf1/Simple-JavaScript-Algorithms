function reducer(arr) {
  const reduced = arr.reduce((acumulator, actualElement) => acumulator.concat(actualElement), []);
  return reduced;
}

function steamrollArray(arr) {
  let flattedArray = reducer(arr);
  while (flattedArray.some((element) => Array.isArray(element))) {
    flattedArray = reducer(flattedArray);
  }

  return flattedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);