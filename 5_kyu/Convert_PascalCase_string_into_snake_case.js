function toUnderscore(string) {
  if (typeof string !== 'string') return String(string);
  return string.replace(/[A-Z]/g, (match) => {
  	return '_' + match.toLowerCase();
  }).slice(1);
};