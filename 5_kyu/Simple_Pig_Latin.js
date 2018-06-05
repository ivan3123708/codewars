function pigIt(str){
  return str = str.split(' ').map((word) => {
  	return word.slice(1) + word[0] + 'ay';
  }).join(' ');
};