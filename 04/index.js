const fs = require('fs');
const path = require('node:path');

const input = fs
  .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
  .trim()
  .split('\n')
  .map((pair) => {
    return pair.split(',');
  })
  .map(([first, second]) => {
    return [
      first.split('-').map((number) => parseInt(number)),
      second.split('-').map((number) => parseInt(number)),
    ];
  })
  .map(([first, second]) => {
    return {
      first: {
        min: first[0],
        max: first[1],
      },
      second: {
        min: second[0],
        max: second[1],
      },
    };
  })
  .filter(({first, second}) => {
    return (
      (first.min >= second.min && first.max <= second.max) ||
      (second.min >= first.min && second.max <= first.max)
    );
  });

console.log(input.length);

const input2 = fs
  .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
  .trim()
  .split('\n')
  .map((pair) => {
    return pair.split(',');
  })
  .map(([first, second]) => {
    return [
      first.split('-').map((number) => parseInt(number)),
      second.split('-').map((number) => parseInt(number)),
    ];
  })
  .map(([first, second]) => {
    return {
      first: {
        min: first[0],
        max: first[1],
      },
      second: {
        min: second[0],
        max: second[1],
      },
    };
  })
  .filter(({first, second}) => {
    return (
      // checks for this: 1-3 __ 1-2
      (first.min >= second.min && first.max <= second.max) ||
      (second.min >= first.min && second.max <= first.max) ||
      // checks for this: 1-3 __ 3-5
      (second.min <= first.max && second.max >= first.max) ||
      // checks for this: 4-7 __ 1-5
      (first.min <= second.max && first.max >= second.max)
    );
  });

console.log(input2.length);
