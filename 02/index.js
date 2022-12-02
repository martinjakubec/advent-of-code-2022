const fs = require('fs');

// rock - A / X
// paper - B / Y
// scis - C / Z

const lossPoints = 0;
const drawPoints = 3;
const winPoints = 6;

const table = {
  A: {
    X: 'draw',
    Y: 'win',
    Z: 'loss',
  },
  B: {
    X: 'loss',
    Y: 'draw',
    Z: 'win',
  },
  C: {
    X: 'win',
    Y: 'loss',
    Z: 'draw',
  },
};

let score = 0;

const input = fs
  .readFileSync('input.txt', 'utf-8')
  .trim()
  .split('\r\n')
  .map((round) => round.split(' '));

for (let [enemy, me] of input) {
  switch (me) {
    case 'X':
      score += lossPoints;
      break;
    case 'Y':
      score += drawPoints;
      break;
    case 'Z':
      score += winPoints;
      break;
  }

  switch (me) {
    case 'X':
      score += 1;
      break;
    case 'Y':
      score += 2;
      break;
    case 'Z':
      score += 3;
      break;
  }
}

console.log(score);
