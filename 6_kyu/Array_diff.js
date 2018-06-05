function array_diff(a, b) {
  return a.filter((num) => {
    return num !== b[0];
  });
};