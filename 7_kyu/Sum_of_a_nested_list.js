const sumNested = arr => {
  let result = 0;
	
  for (let i = 0; i < arr.length; i++) {
	if (!Array.isArray(arr[i])) {
	  result += arr[i];
	} else {
	  result += sumNested(arr[i]);
	}
  }
	
  return result;
};