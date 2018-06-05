function solution(str) {
  var arr = [];

  for (let i = 0; i < str.length; i += 2) {
  	arr.push(str.slice(i, i + 2));
  }

  if (arr[arr.length - 1].length < 2) {
  	arr[arr.length - 1] = arr[arr.length - 1] + '_';
  }

  return arr;
};