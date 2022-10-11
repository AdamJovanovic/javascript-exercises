const leapYears = function (year) {
  //if non-numeric year
  //    return "ERROR"
  //if year divisible by 4
  //  check if divisible by 100 and NOT 400
  //      return FALSE
  //  else
  //      return TRUE
  //else
  //  return FALSE
  //if (!(year % 4)) {
  if (!(year % 4) && (year % 100 || !(year % 400))) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
