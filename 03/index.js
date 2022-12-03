const fs = require('fs');
const path = require('node:path');

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const getLetterPriority = (letter) => {
  return letters.indexOf(letter) + 1;
};

const getOverlappingLetters = (groupA, groupB) => {
  const firstCompartment = new Set(groupA.split(''));
  const secondCompartment = new Set(groupB.split(''));

  const lettersInBoth = [];

  firstCompartment.forEach((letter) => {
    if (secondCompartment.has(letter)) {
      lettersInBoth.push(letter);
    }
  });

  return lettersInBoth;
};

const input = fs
  .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
  .trim()
  .split('\n')
  .map((letters) => {
    const splitPoint = letters.length / 2;
    return [letters.slice(0, splitPoint), letters.slice(splitPoint)];
  })
  .map(([firstCompartment, secondCompartment]) => {
    return getOverlappingLetters(firstCompartment, secondCompartment);
  })
  .map(([letter]) => {
    return getLetterPriority(letter);
  })
  .reduce((prev, current) => {
    return prev + current;
  });

console.log(input);

const getOverlappingLetters2 = (groupA, groupB, groupC) => {
  const firstCompartment = new Set(groupA.split(''));
  const secondCompartment = new Set(groupB.split(''));
  const thirdCompartment = new Set(groupC.split(''));

  let letterInAll;

  firstCompartment.forEach((letter) => {
    if (secondCompartment.has(letter) && thirdCompartment.has(letter)) {
      letterInAll = letter;
    }
  });

  return letterInAll;
};

let groupCounter = 1;
let counter = 0;
const groups = {};
fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
  .trim()
  .split('\n')
  .forEach((letters) => {
    if (!groups[groupCounter]) groups[groupCounter] = [];
    groups[groupCounter].push(letters);
    counter++;
    if (counter == 3) {
      groupCounter++;
      counter = 0;
    }
  });

let prioCounter = 0;

for (const [firstElf, secondElf, thirdElf] of Object.values(groups)) {
  prioCounter += getLetterPriority(
    getOverlappingLetters2(firstElf, secondElf, thirdElf)
  );
}

console.log(prioCounter);
