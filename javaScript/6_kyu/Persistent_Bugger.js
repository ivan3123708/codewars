function persistence(num) {
  let res = num;
  let count = 0;

  while (res >= 10) {
    res = String(res).split('').reduce((a, b) => a * b, 1);
    count++;
  }

  return count;
}