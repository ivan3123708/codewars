function findEvenIndex(arr) {
	
	var left = [];
	var right = [];
  
  for(let i = 1; i < arr.length - 1; i++) {
  	left = [];
  	right = [];
  	for(let j = 0; j < i; j++) {
  		left.push(arr[j]);
  	}
  	for(let k = i + 1; k < arr.length; k++) {
  		right.push(arr[k]);
  	}
  	if(left.reduce((acc, curr) => {acc += curr; return acc}) === right.reduce((acc, curr) => {acc += curr; return acc})) return i;
  }
  
  return -1;
};