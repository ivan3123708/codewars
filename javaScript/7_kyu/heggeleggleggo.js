function heggeleggleggo(word){
  return word.replace(/[^aeiou\s]/gi, (match) => {
    return match + 'egg';
  });
}