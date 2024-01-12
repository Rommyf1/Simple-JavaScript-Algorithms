function rot13(str) {
  const strEncoded = str.split('');
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const strDecoded = [];

  strEncoded.map((element) => {
    if (letters.indexOf(element) < 0) {
      strDecoded.push(element);
    }
    else if ((letters.indexOf(element) >= 0) && (letters.indexOf(element) <= 13)) {
      const increment = letters.indexOf(element) + 13;
      strDecoded.push(letters.charAt(increment));
    }
    const increment = letters.indexOf(element) - 13;
    strDecoded.push(letters.charAt(increment));
  });

  return strDecoded.join('');
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");