function palindrome(str) {
  const condition = /[^a-z|A-Z|0-9]/g;
  const cleanString = str.replace(condition, '').toLowerCase();
  const toComprobate = cleanString.split('');
  const reversedWord = toComprobate.slice().reverse().join('');

  if (reversedWord === toComprobate.join('')) {
    return true;
  }

  return false;
}

palindrome("five|\_/|four");