function toWeirdCase(string){
  var arr = string.split(' ');

  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var word = '';
    for (var j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) word += arr[i][j].toUpperCase();
      else word += arr[i][j];
    }
    result.push(word);
  }

  return result.join(' ');
};