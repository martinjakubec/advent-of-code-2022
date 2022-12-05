const fs = require('node:fs');
const path = require('node:path');

const parsePlan = (plan) => {
  const parsedPlan = {};
  const planLines = plan.split('\n');
  const numbers = planLines.pop().trim().split('   ');
  numbers.forEach((number) => {
    parsedPlan[number] = [];
  });
  planLines.forEach((line, index) => {
    let startingPosition = 1;
    let currentColumn = 1;
    for (let i = startingPosition; i <= line.length; i += 4) {
      if (line[i].trim() != '') {
        parsedPlan[currentColumn].unshift(line[i]);
      }
      currentColumn++;
    }
  });
  return parsedPlan;
};

const getNumbersFromInstruction = (instruction) => {
  const [amount, moveFrom, moveTo] = instruction.match(/\d+/g);
  return {
    amount,
    moveFrom,
    moveTo,
  };
};

const moveBetweenColumns = ({amount, moveFrom, moveTo}) => {
  // PART ONE COMMENTED OUT
  // for (let i = 0; i < amount; i++) {
  // moveTo.push(moveFrom.pop());
  // }
  moveTo.push(...moveFrom.splice(moveFrom.length - amount));
};

const [inputPlan, inputInstructions] = fs
  .readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
  .split('\n\n');

const plan = parsePlan(inputPlan);

inputInstructions
  .trim()
  .split('\n')
  .map((line) => {
    if (line) return getNumbersFromInstruction(line);
  })
  .forEach(({amount, moveFrom, moveTo}) => {
    moveBetweenColumns({
      amount,
      moveFrom: plan[moveFrom],
      moveTo: plan[moveTo],
    });
  });

console.log(plan);
Object.values(plan).forEach((column) => {
  console.log(column[column.length - 1]);
});
