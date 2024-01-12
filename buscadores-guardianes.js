function findElement(arr, func) {
  let num = 0;
  let guardian = false;
  while (num < arr.length && !guardian) {
    guardian = func(arr[num]);
    if (guardian) {
      return arr[num];
    }
    num++;
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);