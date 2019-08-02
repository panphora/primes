const fs = require('fs');
const lineReader = require('line-reader');

function isPrime(num) {
  for(var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

function findNextPrime (num) {
  num = num + 1;

  if (isPrime(num)) {
    return num;
  } else {
    return findNextPrime(num);
  }
}


lineReader.eachLine('./number.txt', function(line) {
  let num = parseInt(line, 10);

  if (isNaN(num)) {
    throw new Error("Not a number!");
  }

  let nextPrime = findNextPrime(num);

  fs.writeFileSync("./number.txt", nextPrime)
});







