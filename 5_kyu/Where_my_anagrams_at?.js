function anagrams(word, words) {
  var result = [];
  var wordSorted = word.split('').sort().join('');
  var wordsSorted = words.map((word) => {
	return word.split('').sort().join('');
  });

  wordsSorted.forEach((word, index) => {
	if(word === wordSorted) {
	  result.push(words[index]);
	}
  });

  return result;
};