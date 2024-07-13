function reverseStringKeepNumber(s) {
  const letters = s
    .split('')
    .filter((char) => isNaN(char))
    .reverse()
    .join('');
  const numbers = s
    .split('')
    .filter((char) => !isNaN(char))
    .join('');
  return letters + numbers;
}

const result = reverseStringKeepNumber('NEGIE1');
console.log(result);
