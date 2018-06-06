function doubles(s) {
  var prev = s;

  for (let i = 0; i < s.length; i++) {
	if (s[i] === s[i + 1]) {
	  s = s.slice(0, i) + s.slice(i + 2);
	}
  }

  if (prev === s) return s;
  else return doubles(s);
};