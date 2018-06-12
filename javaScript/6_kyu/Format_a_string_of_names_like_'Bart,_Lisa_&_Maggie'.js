function list(names){
  if(names.length === 0) return '';
  if(names.length === 1) return names[0].name;
  var str = names.map((x) => x.name).join(', ');
  for(let i = str.length - 1; i > 0; i--) {
  	if(str[i] === ',') {
  		return str.slice(0, i) + ' & ' + str.slice(i + 2);
  	}
  }
};