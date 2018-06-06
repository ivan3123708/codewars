function arithmeticSequenceElements(a,r,n) {
  let result = a;
  
  for (let i = 0; i < n - 1; i++) {
    let next = 0;
    next = a + r;
    result += ', ' + next;
    a = a + r;
  }

  return result;
};