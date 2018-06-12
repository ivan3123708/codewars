var uniqueInOrder = function(iterable) {
  if (Array.isArray(iterable)) {
	if(typeof iterable[0] === 'number') return Array.from(new Set(iterable));
	else return iterable.join('').replace(/(.)\1+/g, (str, match) => match[0]).split('');
  } else {
  	return iterable.replace(/(.)\1+/g, (str, match) => match[0]).split('');
  }
};