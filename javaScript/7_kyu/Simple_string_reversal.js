function solve(str) {
	var lengths = str.split(' ').map((word) => word.length);
  var reversed = str.replace(/\s/g, '').split('').reverse().join('');
  var result = [];
  
  while(reversed.length > 0) {
  	lengths.forEach((length) => {
  		result.push(reversed.slice(0, length));
  		reversed = reversed.slice(length);
  	});
  }
  
  return result.join(' ');
}