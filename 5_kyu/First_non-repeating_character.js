function firstNonRepeatingLetter(s) {
	if (s === '') return '';
  var count;
  
  for (var i = 0; i < s.length; i++) {
  	count = 0;

  	for (var j = 0; j < s.length; j++) {
  		if(s[i].toLowerCase() !== s[j].toLowerCase()) count++;
  	}

  	if (count === s.length - 1) return s[i];
  }

  return '';
};