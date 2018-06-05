function rot13(str) {
	var result = '';
  
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i).match(/[A-Z]/)) {
      if(str.charCodeAt(i) - 13 >= 65) {
        result += (String.fromCharCode(str.charCodeAt(i) - 13));
      } else {
        result += (String.fromCharCode(str.charCodeAt(i) + 26 - 13));
      }
    } else if(str.charAt(i).match(/[a-z]/)) {
    	if(str.charCodeAt(i) - 13 >= 97) {
        result += (String.fromCharCode(str.charCodeAt(i) - 13));
      } else {
        result += (String.fromCharCode(str.charCodeAt(i) + 26 - 13));
      }
    } else {
      result += str.charAt(i);
    }
  }
  
  return result;
};