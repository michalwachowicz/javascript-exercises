const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((total, num) => total + num, 0);

const multiply = (arr) => arr.reduce((total, num) => total * num, 1);

const power = (a, b) => Math.pow(a, b);

const factorial = (num) =>
  Array.from({ length: num }, (_, i) => i + 1).reduce(
    (total, num) => total * num,
    1
  );

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
