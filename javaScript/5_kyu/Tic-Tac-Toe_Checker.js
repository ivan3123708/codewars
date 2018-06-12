function isSolved(board) {
	board = board[0].concat(board[1], board[2]);
  
  for(let i = 0; i < 9; i++) {
  	if(i % 3 === 0 && board[i] === board[i+1] && board[i+1] === board[i+2]) {
  		if(board[i] !== 0) return board[i];
  	}
  	if(i < 3 && board[i] === board[i+3] && board[i+3] === board[i+6]) {
  		if(board[i] !== 0) return board[i];
  	}
 		if(board[4] === board[0] && board[4] === board[8]) {
 			if(board[4] !== 0) return board[i];
 		}
 		if(board[4] === board[2] && board[4] === board[6]) {
 			if(board[4] !== 0) return board[i];
 		}
  }
  
  return board.includes(0) ? -1 : 0;
};
