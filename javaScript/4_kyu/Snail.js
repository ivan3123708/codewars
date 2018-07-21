snail = function(array) {
  if (array[0].length === 0) return [];
  
  var startCol = 0;
  var endCol = array.length - 1;
  var startRow = 0;
  var endRow = array.length - 1;
  var res = [];
  
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      res.push(array[startRow][i]);
    }
    startRow++;
    
    for (let i = startRow; i <= endRow; i++) {
      res.push(array[i][endCol]);
    }
    endCol--;
    
    for (let i = endCol; i >= startCol; i--) {
      res.push(array[endRow][i]);
    }
    endRow--;
    
    for (let i = endRow; i >= startRow; i--) {
      res.push(array[i][startCol]);
    }
    startCol++;
  }
  
  return res;
}