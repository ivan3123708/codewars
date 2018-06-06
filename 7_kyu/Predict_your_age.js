function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  var args = Array.prototype.slice.call(arguments);

  return Math.floor(Math.sqrt(args
    .map((age) => age * age)
    .reduce((acc, curr) => acc += curr)) / 2);
};