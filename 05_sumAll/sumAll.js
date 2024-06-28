const isPositiveNumber = (num) => typeof num == "number" && num >= 0;

const sumAll = (a, b) => {
  if (!isPositiveNumber(a) || !isPositiveNumber(b)) return "ERROR";

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
