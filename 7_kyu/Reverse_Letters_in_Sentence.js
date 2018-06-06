function reverser(sentence) {
	return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
};