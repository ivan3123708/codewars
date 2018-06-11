function validParentheses(parens) {
  if (!parens) return true;
  if (parens === parens.replace(/\(\)/g, '')) return false;

  return validParentheses(parens.replace(/\(\)/g, ''));
};