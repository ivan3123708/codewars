function highAndLow(numbers) {
  var result =  numbers.split(' ').map((x) => x/1).sort((a, b) => a - b);
  return result[result.length-1] + ' ' + result[0];
};