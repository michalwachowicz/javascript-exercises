const palindromes = (str) => {
  const formatted = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return formatted == formatted.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
