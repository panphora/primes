const lineReader = require('line-reader');

lineReader.eachLine('./numbers.txt', function(line) {
  console.log(parseInt(line, 10));
});