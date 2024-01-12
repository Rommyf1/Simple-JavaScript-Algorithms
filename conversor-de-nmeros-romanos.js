const romanNumbers = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1
};

function searchRomanNumber(decimal) {

  for (let romanNumber in romanNumbers) {
    if (decimal >= romanNumbers[romanNumber]) {
      decimal -= romanNumbers[romanNumber];
      return [romanNumber, decimal];
    }
  }
}

function convertToRoman(num) {
  const finalRomanNumber = [];
  let decimal = num;

  if (num <= 0) {
    return `Error, Invalid number`;
  }

  while (decimal > 0) {
    const answer = searchRomanNumber(decimal);
    decimal = answer[1];
    finalRomanNumber.push(answer[0]);
  }

  return finalRomanNumber.join('');
}

console.log(convertToRoman(3999));