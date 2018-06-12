function solution(number){	
  var arr = [];
  
  for(let i = 3; i < number; i++) {
  	arr.push(i);
  }
  
  arr = arr.filter((x) => (x % 3 === 0) || (x % 5 === 0));

  return arr.length > 0 ? arr.reduce((acc, cur) => acc + cur) : 0;
};