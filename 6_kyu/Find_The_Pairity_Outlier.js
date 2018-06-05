function findOutlier(integers) {
  var odd = [];
  var even = [];
  
  integers.forEach((x) => x % 2 !== 0 ? odd.push(x) : even.push(x));
  
  return odd.length === 1 ? odd[0] : even[0];
};