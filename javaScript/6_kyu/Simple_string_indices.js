function solve(str,idx){

  if (str[idx] !== '(') {
    return -1;
  }
  
  var inner = 0;

  for (var i = idx + 1; i < str.length; i++) {
    
    if (str[i] === '(') {
      inner++;
    }

    if (str[i] === ')') {
      if (inner > 0) {
        inner--;
      } else {
        return i;
      }
    }
  }
};