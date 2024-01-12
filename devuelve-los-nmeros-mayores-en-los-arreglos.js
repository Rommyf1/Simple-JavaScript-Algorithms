function biggestElement(subArr){
  let biggestElement = subArr[0];
  subArr.map((element) => {
    (element > biggestElement) ?
    biggestElement = element :
    biggestElement;
  });
  return biggestElement;
}

function largestOfFour(arr) {
  const biggestsElements = [];
  arr.map((element) => {
    biggestsElements.push(biggestElement(element));
  });
  return biggestsElements;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);