// La variable global
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < this.length; i++) {
    const value = callback(this[i], i, this);
    newArray.push(value);
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
