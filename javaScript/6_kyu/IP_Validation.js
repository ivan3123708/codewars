function isValidIP(str) {
  if(/^(\d{1,3}).(\d{1,3}).(\d{1,3}).(\d{1,3})$/g.test(str)) {
    str = str.split('.');
    return str.every((x) => x <= 255)
  } else {
  	return false;
  }
};