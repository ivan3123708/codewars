function toCamelCase(str) {
	
	str = str.replace(/[_-]/g, ' ').split(' ');
	
	for(let i = 1; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].slice(1);
	}
	
	return str.join('');
};