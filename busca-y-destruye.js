function destroyer(arr, ...targets) {
  let arrDestroyed = arr;

  for (let i = 0; i < targets.length; i++) {
    arrDestroyed = arrDestroyed.filter((element) => element !== targets[i]);
  }

  return arrDestroyed;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);