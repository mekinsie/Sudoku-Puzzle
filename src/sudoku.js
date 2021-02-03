export default function Sudoku(row, column) {
  this.row = row;
  this.column = column;
}

Sudoku.prototype.checkNumbers = function(sudokuInput) {
  for (let i=0; i <sudokuInput.row.length; i++){
    if (sudokuInput.row[i].length === 9 && sudokuInput.row[i].includes(1,2,3,4,5,6,7,8,9)) {
  return true
    } else {
  return false
    }
  }
};

