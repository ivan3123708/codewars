String.prototype.isUpperCase = function() {
  var str =  this.replace(/\W/g, '');

  if (str.match(/[A-Z]+/)) {
    return str.match(/[A-Z]+/)[0] === str;
  } else {
    return false;
  }
};