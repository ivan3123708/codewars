function getCount(str) {
  var vowels = str.match(/[aeiou]/g);

  if (vowels) return vowels.length;
  else return 0;
};