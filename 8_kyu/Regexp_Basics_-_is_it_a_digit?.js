String.prototype.digit = function() {
  return /^\d{1}$/.test(this);
};