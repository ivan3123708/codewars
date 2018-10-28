export function countPositivesSumNegatives(input: any) {
  if (!input || input.length === 0) return [];
  
  const first = input.reduce((a, b) => {
    if (b > 0) a++;
    return a;
  }, 0);
  
  const second = input.reduce((a, b) => {
    if (b < 0) a += b;
    return a;
  }, 0);
  
  return [first, second];
}