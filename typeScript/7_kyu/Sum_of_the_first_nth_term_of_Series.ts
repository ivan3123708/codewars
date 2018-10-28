export function SeriesSum(n: number): string {
  if (n === 0) return '0.00';
  
  let sum = 1;
  let fraction = 4;

  while (n > 1) {
    sum += 1 / fraction;

    n--;
    fraction += 3;
  }

  return sum.toFixed(2);
}