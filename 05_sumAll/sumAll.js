const sumAll = function (numA, numB) {
  let sum = 0;
  let first, second;
  if (
    numA < 0 ||
    numB < 0 ||
    !Number.isFinite(numA) ||
    !Number.isFinite(numB)
  ) {
    return "ERROR";
  }
  if (numA > numB) {
    first = numB;
    second = numA;
  } else {
    first = numA;
    second = numB;
  }
  for (let iterator = first; iterator <= second; iterator++) {
    sum += iterator;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
