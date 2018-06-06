function divisors(integer) {
  var result = [];
  
  for (var i = 0; i < integer; i++) {
    if (integer % i === 0 && i !== 1) result.push(i);
  }
  
  if (result.length === 0) return integer + ' is prime';
  else return result;
};