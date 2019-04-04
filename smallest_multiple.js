/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
    
  var allPrime = [];
  let LCM = 0;

  function findPrimeFactors (num) {
    while (num % 2 === 0) {
        allPrime.push(2);
        num = num / 2;
    }
  
    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        allPrime.push(num);
    }
  }
  
  for(let a=2; a<x+1; a++){
    findPrimeFactors(a);
  }
  
  allPrime.sort();

  //not yet done!!
  for(let b=0; b<allPrime.length; b++){
   
  }

 let currentNum = 0;
 let instances = 0;
  
  console.log(allPrime);

  return 0;
};