Array.prototype.square = function() {
	return this.map((e) => e * e);
};

Array.prototype.cube = function() {
	return this.map((e) => e * e * e);
};

Array.prototype.sum = function() {
	return this.reduce((acc, e) => acc += e);
};

Array.prototype.average = function() {
	if(this.length > 0) return this.reduce((acc, e) => acc += e) / this.length;
  else return 'Wrong average';
};

Array.prototype.even = function() {
	return this.filter((e) => e % 2 === 0);
};

Array.prototype.odd = function() {
	return this.filter((e) => e % 2 !== 0);
};