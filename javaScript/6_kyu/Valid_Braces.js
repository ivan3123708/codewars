function validBraces(braces){
  if (!braces) {
	return true;
  } else if(braces !== braces.replace(/(\(\)|\{\}|\[\])/g, '')) {
	return validBraces(braces.replace(/(\(\)|\{\}|\[\])/g, ''));
  } else {
	return false;
  }
}