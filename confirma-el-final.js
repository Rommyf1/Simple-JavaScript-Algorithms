function confirmEnding(str, target) {
  const word = str.split('').reverse();
  const token = target.split('').reverse();

  let i = 0;
  let matched = true;
  while ((i < token.length) && (matched)) {
    if(word[i] !== token[i]){
      return false;
    }
    i++
  }

  return matched;
}

confirmEnding("Bastian", "n");