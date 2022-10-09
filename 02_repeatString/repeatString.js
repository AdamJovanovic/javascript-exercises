const repeatString = function (str, num) {
  let repeated = [];
  if (num < 0) {
    return "ERROR";
  } else if (num == 0) {
    return "";
  } else {
    for (let i = 0; i < num; i++) {
      repeated += str;
    }
  }
  return repeated;
};

// Do not edit below this line
module.exports = repeatString;
