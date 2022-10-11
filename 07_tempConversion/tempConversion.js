const ftoc = function (fahrenheit) {
  return roundOne((fahrenheit - 32) * (5 / 9));
};

const ctof = function (celsius) {
  return roundOne(celsius * (9 / 5) + 32);
};

const roundOne = function (num) {
  return Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
