function comprobations(firstNumber, secondNumber) {
  if ((typeof secondNumber == 'number') && (typeof firstNumber == 'number')) {
    return (firstNumber + secondNumber);
  }
  else if (((typeof secondNumber !== 'number') || (typeof firstNumber !== 'number')) && (secondNumber !== undefined)) {
    return undefined;
  }
  else if(typeof firstNumber !== 'number'){
    return undefined;
  }
  return true;
}

function addTogether(firstNumber, secondNumber) {
  const firstAnswer = comprobations(firstNumber, secondNumber);
  if (typeof firstAnswer == "number") {
    return firstAnswer;
  }
  else if (firstAnswer == undefined) {
    return undefined;
  }
  else if (firstAnswer);
  return function (x) {
    return comprobations(firstNumber, x);
  }
}

console.log(addTogether("http://bit.ly/IqT6zt"));