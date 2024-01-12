const pars = {
  "A": "T",
  "T": "A",
  "C": "G",
  "G": "C"
}

function pairElement(str) {
  const elements = str.split('');
  const pairedElements = [];

  elements.map((chain) => {
    pairedElements.push([`${chain}`,`${pars[chain]}`])
  });
  
  return pairedElements;
}

pairElement("ATCGA");