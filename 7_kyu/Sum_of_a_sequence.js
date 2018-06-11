const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  
  var arr = [begin];

  while (end > begin) {
    begin += step;
    if (begin <= end) arr.push(begin);
  }

  return arr.reduce((acc, curr) => acc + curr, 0);
};