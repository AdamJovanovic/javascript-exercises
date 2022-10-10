const removeFromArray = function () {
  const numRemovals = arguments.length - 1;
  if (!numRemovals) {
    return arguments[0];
  } else {
    let target = arguments[0];
    let remove = Array.from(arguments).slice(1, arguments.length);
    console.log(remove);
    target = target.filter(function (item) {
      for (let i = 0; i < remove.length; i++) {
        if (remove[i] === item) {
          return false;
        }
      }
      return true;
    });
    return target;
  }
};
// Do not edit below this line
module.exports = removeFromArray;
