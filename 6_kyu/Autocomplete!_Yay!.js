function autocomplete(input, dictionary) {
  input = input.replace(/[^a-zA-Z\-\s]/g, '');
	
  return dictionary
	.filter((word) => {
	  return new RegExp('^' + input, 'i').test(word)
	})
	.slice(0, 5);
};