function vowel2index(str) {
  var res = '';
	
  for(var i = 0; i < str.length; i++) {
	if(/[aeiou]/gi.test(str[i])) {
	  res += i + 1;
	} else {
	  res += str[i];
	}
  }
	
  return res;
};