//exports must be infront of every function name when using jasmine
exports.outputHelloWorld = function () {
  return "Hello, world!";
};

exports.calculate = function(amount) {
  if (amount <= 10) {
    return amount * 0.1;
  } else if (amount <= 20) {
    return 1 + ((amount-10) * 0.07);
  } else if (amount <= 30) {
    return 1.7 + ((amount - 20) * 0.05);
  } else {
    return 2.2 + ((amount - 30) * 0.03);
  }
};

exports.leapYear = function(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

exports.changeToUpper = function(strArr) {
  var result = [];
  for (var i = 0; i < strArr.length; i++) {
    result.push(strArr[i].toUpperCase());
  }
  return result;
};

exports.findGreatestStrength = function(objArr) {
  var largestStrength = objArr[0];

  for (var i = 0; i < objArr.length; i++) {
    if (objArr[i].strength > largestStrength.strength) {
    largestStrength = objArr[i];
    }
  }

  return largestStrength;
};
