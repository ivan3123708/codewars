Object.prototype.hash = function(string) {
  var keys = string.split('.');
  var temp = Object.assign({}, this);
  var count = 0;

  for(var i = 0; i < keys.length; i++) {
    while (temp[keys[i]]) {
      temp = temp[keys[i]];
      count++
    }
  }

  return count === keys.length ? temp : undefined;
};