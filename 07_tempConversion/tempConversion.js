const roundToOneDecimal = (value) => Math.round(value * 10) / 10;

// Formula: (Temperature in F - 32) * 5/9
const convertToCelsius = (temp) => roundToOneDecimal((temp - 32) * (5 / 9));

// Formula: (9/5 * temperature in C) + 32
const convertToFahrenheit = (temp) => roundToOneDecimal((9 / 5) * temp + 32);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
