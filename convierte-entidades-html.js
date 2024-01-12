const transformedElements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};

function convertHTML(str) {
  const condition = /[&|<|>|"|']/g;
  const convertedParagraph = str.replace(condition, (caracter) => transformedElements[caracter]);

  return convertedParagraph;
}

convertHTML("<>");