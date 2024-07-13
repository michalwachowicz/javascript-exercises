const fibonacci = (val) => {
  const num = parseInt(val);
  if (isNaN(num) || num < 0) return "OOPS";

  return Array.from({ length: num + 1 }).reduce((arr, _, i) => {
    arr.push(i <= 1 ? i : arr[i - 2] + arr[i - 1]);
    return arr;
  }, [])[num];
};

// Do not edit below this line
module.exports = fibonacci;
