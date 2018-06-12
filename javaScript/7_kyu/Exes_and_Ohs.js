function XO(str) {
  if (!str) return true;

  str = str
    .split('')
    .sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    })
    .join('');
  
  let exes = str.match(/x+/gi);
  let ohs = str.match(/o+/gi);
  
  if (exes && ohs) {
    return exes[0].length === ohs[0].length;
  } else {
    return false;
  }
};