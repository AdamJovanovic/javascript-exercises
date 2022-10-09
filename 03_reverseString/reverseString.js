const reverseString = function (str) {
  let letters = str.split("");
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += letters[i];
  }
  return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
