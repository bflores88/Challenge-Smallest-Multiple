/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function (ceiling) {
  // do work here
  function range(ceiling) {
    var arr = [];
    for (var i = 1; i <= ceiling; i++) {
      arr.push(i);
    }
    return arr;
  }

  function gcd(a, b) {
    if (!b) {
      return a;
    };
    return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  var multiple = 1;
  range(ceiling).forEach(function (n) {
    multiple = lcm(multiple, n);
  });
  return multiple;
};