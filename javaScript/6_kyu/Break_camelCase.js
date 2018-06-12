function solution(string) {
  return string.replace(/\w(?=[A-Z])/g, (match) => {
  	return match + ' ';
  });
};