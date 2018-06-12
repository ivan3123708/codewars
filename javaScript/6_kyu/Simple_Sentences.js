function makeSentence(parts) {
  return parts
    .filter((word) => word !== '.')
    .map((word) => /^[a-z\d]+$/gi.test(word) ? ' ' + word : word)
    .join('')
    .trim() + '.';
};