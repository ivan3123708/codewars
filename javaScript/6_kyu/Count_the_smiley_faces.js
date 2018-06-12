function countSmileys(arr) {
console.log(arr)
  var regex = /^([;:]~?-?[D)])$/g;
  count = 0;

  arr.forEach((smiley) => {
    if (!!smiley.match(regex)) count++;
  });

  return count;
};