function alphabetPosition(text) {
  var result = '';
  
  for(var i = 0; i < text.length; i++) {
    if (/[A-Z]/.test(text[i])) result += text.charCodeAt(i) - 64 + ' ';
    if (/[a-z]/.test(text[i])) result += text.charCodeAt(i) - 96 + ' ';
  }

  return result.slice(0, result.length - 1);
};