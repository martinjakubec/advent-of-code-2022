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

const score = 0;

const input = fs
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((round) => round.split(' '));

for (let [enemy, me] of input) {
  score += 
  switch (table[enemy][me]) {
    case ''
  }
}
