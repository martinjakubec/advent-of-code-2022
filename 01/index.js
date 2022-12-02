const fs = require('fs');

const input = fs
  .readFileSync('input.txt', 'utf-8')
  .split('\n\n') // splits elf by elf
  .map((el) => {
    // splits every elve's calories
    return el.split('\n');
  })
  .map((elf) => {
    // counts calories together
    return parseInt(
      elf.reduce((prev, current) => {
        return parseInt(prev) + parseInt(current);
      })
    );
  })
  .sort((a, b) => {
    // sorts from most to least
    return b - a;
  })
  .slice(0, 3) // chooses first three elves
  .reduce((prev, current) => {
    // counts three most calories together
    return prev + current;
  });

console.log(input);
