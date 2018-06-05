function searchNames( logins ) {
  return logins.filter((username, i, arr) => /^\.|\.$/.test(arr[i - 1]));
};