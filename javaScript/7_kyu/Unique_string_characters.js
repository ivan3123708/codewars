function solve(a, b) {
	var result = [];
	
	for (let i = 0; i < a.length; i++) {
	  if (!b.includes(a[i])) result.push(a[i]);
	}
	
	for (let i = 0; i < b.length; i++) {
	  if (!a.includes(b[i])) result.push(b[i]);
	}
	
	return result.join('');
};