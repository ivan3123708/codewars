function iqTest(numbers) {
  var arr = numbers.split(' ');
  var even = 0;
  var evenIndex = 0;
  var odd = 0;
  var oddIndex = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
      evenIndex = i + 1;
    } else {
      odd++;
      oddIndex = i + 1;
    }
  }
  
  return even < odd ? evenIndex : oddIndex;
};