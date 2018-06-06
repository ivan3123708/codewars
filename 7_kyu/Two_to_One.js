function longest(s1, s2) {
  var result = [];
  var s3 = (s1 + s2).split('');

  for (var i = 0; i < s3.length; i++) {
    if (!result.includes(s3[i])) result.push(s3[i]);
  }

  return result.sort().join('');
};