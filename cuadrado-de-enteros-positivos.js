const squareList = arr => {
  // Cambia solo el código debajo de esta línea
  const squareValues = [];

  const positiveElements = arr.filter((element) => ((element > 0) && (Number.isInteger(element))));

  positiveElements.map((element) => squareValues.push(element * element));

  return squareValues;
  // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
