export function dontGiveMeFive(start:number, end:number) : number {
  let res = 0;
  
  while (start <= end) {
    if (start.toString().indexOf('5') < 0) {
      res++;
    }
    
    start++;
  }
  
  return res;
};