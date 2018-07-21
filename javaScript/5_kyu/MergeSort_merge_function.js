function mergesorted(a, b) {
  var res = [];
  var aLen = a.length;
  var bLen = b.length;
  var i = 0;
  var j = 0;
  
  while (i < aLen && j < bLen) {
    if (a[i] < b[j]) {
      res.push(a[i]);
      i++;
    } else {
      res.push(b[j]);
      j++;
    }
  }
  
  return res.concat(a.slice(i)).concat(b.slice(j));
}