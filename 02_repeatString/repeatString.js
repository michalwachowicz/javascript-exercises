const repeatString = (text, n) => {
  if (n < 0) return "ERROR";

  let repeatedString = "";

  for (let i = 0; i < n; i++) {
    repeatedString = repeatedString.concat(text);
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
