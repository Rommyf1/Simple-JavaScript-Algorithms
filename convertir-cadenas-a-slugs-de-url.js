// Cambia solo el código debajo de esta línea
function urlSlug(title) {
  const separatedValues = title.split(/\W/);
  console.log(separatedValues);
  const formattedValues = []

  separatedValues.map((element) => {
    if (element) {
      formattedValues.push(element.toLowerCase());
    }
  });

  return formattedValues.join("-");
}
// Cambia solo el código encima de esta línea
console.log(urlSlug(" Winter Is  Coming"));