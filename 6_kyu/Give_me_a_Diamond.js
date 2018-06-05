function diamond(n){
  if (n % 2 === 0 || n < 0) return null;

  var dmnd = '';
  var space = '';
  var res = '';
  
  for (var i = 1; i < n; i += 2) {
    space = ' '.repeat((n - i) / 2);
    dmnd = '*'.repeat(i);
    res += space + dmnd + '\n';
  }

  res += '*'.repeat(n) + '\n';

  for (var i = n - 2; i > 0; i -= 2) {
    space = ' '.repeat((n - i) / 2);
    dmnd = '*'.repeat(i);
    res += space + dmnd + '\n';
  }

  return res;
};