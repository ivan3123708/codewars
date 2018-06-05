function expandedForm(num) {
  var arr = [];
  num = num.toString();

  for (var i = 0; i < num.length; i++) {
    if (num[i] !== '0') {
      arr.push(num[i] + '0'.repeat(num.slice(i).length - 1))
    }
  }
  
  return arr.join(' + ');
};