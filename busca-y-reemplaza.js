function consistentChange(before, after) {
  if (before.match(/^[a-z]/)) {
    let modified = after.split('');
    modified[0] = modified[0].toLowerCase();
    const final = modified.join('');

    return final;
  }
  let modified = after.split('');
  modified[0] = modified[0].toUpperCase();
  const final = modified.join('');

  return final;
}

function myReplace(str, before, after) {
  const replaced = str.replace(before, consistentChange(before, after));
  return replaced;
}

myReplace("Let us go to the store", "store", "all");