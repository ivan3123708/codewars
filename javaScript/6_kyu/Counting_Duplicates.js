function duplicateCount(text) {
	var arr = [];
	var count = 0;
	text = text.toLowerCase();
  
  for(let i = 0; i < text.length; i++) {
  	found = false;
  	for(let j = i+1; j < text.length; j++) {
  		if(!arr.includes(text[i]) && text[i] === text[j]) {
  			arr.push(text[i]);
  			count++;
  			break;
  		}
  	} 
  }
  
  return count;
};