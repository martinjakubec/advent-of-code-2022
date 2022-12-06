const fs = require('node:fs');
const path = require('node:path');

const markerCharactersAmount = 14;

let lastChars;

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8');
input.split('').every((letter, index, array) => {
  const currentChars = array.slice(index, index + markerCharactersAmount);
  const charSet = new Set(currentChars);
  if (charSet.size == markerCharactersAmount) {
    lastChars = currentChars.join('');
    return false;
  }
  return true;
});

console.log(
  input.slice(0, input.indexOf(lastChars)).length + markerCharactersAmount
); // plus _markerCharactersAmount_ because the start-marker letters are also processed before concluding that they are the right answer
