function generateHashtag (str) {
  if (str === '') return false;

  var arr = str.trim().split(' ');
  arr = arr.map((e) => {
	return e[0].toUpperCase() + e.slice(1, e.length);
  });

  var result = '#' + arr.join('');

  if (result.length > 140) return false;
  else return result;
};