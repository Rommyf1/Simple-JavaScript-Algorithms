function whatIsInAName(collection, source) {
  const arr = [];
  let temporal = collection.slice();

  for (let property in source) {
    temporal = temporal.filter((element) => property in element && source[property] === element[property]);
  }
  arr.push(...temporal);
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });