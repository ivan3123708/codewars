function titleCase(title, minorWords) {
  if (title === '' || minorWords === '') return '';
  
  var titleArr = title.split(' ');
  
  titleArr = titleArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
  });
  
  if (minorWords) {
    var minorArr = minorWords.split(' ');
  
    for (var i = 1; i < titleArr.length; i++) {
      for (var j = 0; j < minorArr.length; j++) {
        if (titleArr[i].toLowerCase() === minorArr[j].toLowerCase()) {
          titleArr[i] = titleArr[i].toLowerCase();
        }
      }
    }
    return titleArr.join(' ');
  }
  
  return titleArr.join(' ');
};