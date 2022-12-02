const fs = require('fs');
const path = require('node:path');

// rock - A
// paper - B
// scis - C

// X - loss
// Y - draw
// Z - win

function makeTable() {
  this.rock = {
    beats: 'scis',
    draws: 'rock',
    loses: 'paper',
    pointsForPlaying: 1,
  };
  this.paper = {
    beats: 'rock',
    draws: 'paper',
    loses: 'scis',
    pointsForPlaying: 2,
  };
  this.scis = {
    beats: 'paper',
    draws: 'scis',
    loses: 'rock',
    pointsForPlaying: 3,
  };
  this.A = this.rock;
  this.B = this.paper;
  this.C = this.scis;
}

const table = new makeTable();
console.log(table);

let score = 0;

const input = fs
  .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
  .trim()
  .split('\n')
  .map((round) => round.split(' '));

for (let [enemyChoice, result] of input) {
  switch (result) {
    case 'X':
      score += table[table[enemyChoice].beats].pointsForPlaying;
      break;
    case 'Y':
      score += table[table[enemyChoice].draws].pointsForPlaying;
      score += 3;
      break;
    case 'Z':
      score += table[table[enemyChoice].loses].pointsForPlaying;
      score += 6;
      break;
  }
}

console.log(score);
