function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    if ((num <= arr[0])) {
      return 0;
    }
    else if (num > arr[index] && num <= arr[index + 1]) {
      return index + 1;
    } else if (index === arr.length - 1 && num > arr.length - 1) {
      return index + 1;
    }
  }
  return 0;
}

getIndexToIns([40, 60], 50);