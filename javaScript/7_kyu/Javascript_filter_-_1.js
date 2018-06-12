function searchNames(logins) {
  return logins.filter((pair) => pair[0].charAt(pair[0].length - 1) === '_');
};