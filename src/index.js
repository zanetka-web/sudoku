module.exports = function sudoku(puzzle) {

  function isValueValidOnTheRow(board, value, row) {
      return board[row].indexOf(value) === -1;
  }

  function isValueValidOnTheColumn(board, value, col) {
      let isValid = true;

      for (let i = 0; i < 9; i++) {
          isValid = isValid && board[i][col] !== value;
      }

      return isValid;
  }

  function isValueValidOnTheGrid(board, value, col, row) {

      let isValid = true;

      if (row < 3) {
          if (col < 3) {
              for (let i = 0; i < 3; i++) {
                  for (let j = 0; j < 3; j++) {
                      isValid = isValid && board[i][j] !== value;
                  }
              }
          } else if (col < 6) {
              for (let i = 0; i < 3; i++) {
                  for (let j = 3; j < 6; j++) {
                      isValid = isValid && board[i][j] !== value;
                  }
              }
          } else if (col < 9) {
              for (let i = 0; i < 3; i++) {
                  for (let j = 6; j < 9; j++) {
                      isValid = isValid && board[i][j] !== value;
                  }
              }
          }
      } else if (row < 6) {
          if (col < 3) {
              for (let i = 3; i < 6; i++) {
                  for (let j = 0; j < 3; j++) {
                      isValid = isValid && board[i][j] !== value;
                  }
              }
          } else if (col < 6) {
              for (let i = 3; i < 6; i++) {
                  for (let j = 3; j < 6; j++) {
                      isValid = isValid && board[i][j] !== value;
                  }
              }
          } else if (col < 9) {
              for (let i = 3; i < 6; i++) {
                  for (let j = 6; j < 9; j++) {
                      isValid = isValid && board[i][j] !== value;
                  }
              }
          }
      } else {
          if (col < 3) {
              for (let i = 6; i < 9; i++) {
                  for (let j = 0; j < 3; j++) {
                      isValid = isValid && board[i][j] !== value;
                  }
              }
          } else if (col < 6) {
              for (let i = 6; i < 9; i++) {
                  for (let j = 3; j < 6; j++) {
                      isValid = isValid && board[i][j] !== value;
                  }
              }
          } else if (col < 9) {
              for (let i = 6; i < 9; i++) {
                  for (let j = 6; j < 9; j++) {
                      isValid = isValid && board[i][j] !== value;
                  }
              }
          }
      }
     
      return isValid;
  }
     
  function isPuzzleInvalid(board, value, row, col) {
    return !isValueValidOnTheRow(board, value, row) ||
    !isValueValidOnTheColumn(board, value, col) ||
    !isValueValidOnTheGrid(board, value, col, row);
  }
 
 
  for(let row=0; row <9; row++) {
    for(let col=0; col <9; col++) {
      if(puzzle[row][col] === 0) {
        for(let value = 1; value < 10; value++) {
          if(!isPuzzleInvalid(puzzle, value, row, col)) {
            puzzle[row][col] = value;
            // here it goes the trick part, in case the puzzle will not be solved, we will reset the value for 0, in that way it will be open for solving on recursive round
            if(sudoku(puzzle)) {
              return puzzle;
            } else {
              puzzle[row][col] = 0;
            }
          }
        }
       
        return false;
      }
    }
  }
 
  return puzzle;
}