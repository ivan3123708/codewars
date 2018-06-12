function solution(digits) {
  digits = digits.toString();
  var digit = '';
  var arr = [];

  for (var i = 0; i < digits.length; i++) {
    digit = digits.slice(i, i + 5);
    digit.length > 4 && arr.push(digit);
  }

  var res = arr.sort((a, b) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0
  })[0];
  
  return parseInt(res);
};