function alphanumeric(string){
  var string2 = string.replace(/(.)(?=.*\1)/g, "");

  if (string2 === '' || string2 === ' ') return false;

  var result = string.match(/[a-zA-Z0-9]+/);
  
  return result ? result[0] === string : false;
};