function majorArray(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    return [arr1, arr2];
  }
  else {
    return [arr2, arr1];
  }
}

function diffArray(arr1, arr2) {
  const [baseArray, minorArray] = majorArray(arr1, arr2);
  const newArr = [];

  baseArray.map((element) => {
    if (!(minorArray.includes(element))) {
      newArr.push(element);
    }
  });

  minorArray.map((element) => {
    if (!(baseArray.includes(element))) {
      newArr.push(element);
    }
  });

  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);