function accum(s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
	arr.push(s[i].toUpperCase());
	for (let j = 0; j < i; j++)  {
	  arr[i] += s[i].toLowerCase();
	}
  }

  return arr.join('-');
};