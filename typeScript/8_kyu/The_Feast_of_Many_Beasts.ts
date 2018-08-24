export function feast(beast:string, dish:string):boolean {
  const a = beast[0];
  const z = beast[beast.length - 1];
  
  return dish[0] === a && dish[dish.length - 1] === z;
};