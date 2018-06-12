var isAnagram = function(test, original) {
  function simplify(str) {
    return str
      .toLowerCase()
      .split('')
      .sort((a, b) => a > b)
      .join('');
  }
  
  return simplify(test) === simplify(original);
};