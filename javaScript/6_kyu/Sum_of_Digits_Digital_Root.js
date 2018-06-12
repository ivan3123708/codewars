function digital_root(n) {
  
  var arr = ('' + n).split('');
  
  return arr.length > 1 ? digital_root(arr.reduce((a, b) => a*1 + b*1)) : arr.join('')*1;
};