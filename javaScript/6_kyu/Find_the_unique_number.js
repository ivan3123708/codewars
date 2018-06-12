function findUniq(arr) {
  var first = arr[0];
  for(var i = 1; i < arr.length; i++) {
  	if(arr[i] !== first) {
  		if(arr[i] !== arr[i + 1]) return arr[i];
  		else return first;
  	}
  }
};