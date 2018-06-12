String.prototype.camelCase=function(){
  return this.length ? this
    .trim()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('') : '';
};