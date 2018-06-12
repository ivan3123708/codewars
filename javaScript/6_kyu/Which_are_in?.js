function inArray(array1,array2){
console.log(array1, array2)
  var r = [];

  for (var i = 0; i < array2.length; i++) {
    for (var j = 0; j < array1.length; j++) {
      if (array2[i].match(array1[j])) {
        r.push(array1[j]);
      }
    }
  }

  return r
    .filter((i, pos) => r.indexOf(i) === pos)
    .sort()
    .filter((i) => i !== undefined);
};