import Sudoku from './../src/sudoku.js';


describe('Sudoku', () => {
  test('should correctly create a sudoku object with column and row', () => {
    let sudokuKey = new Sudoku([1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9]);
    expect(sudokuKey.row).toEqual([1,2,3,4,5,6,7,8,9]);
  });
  test('should make sure numbers in sudokuInput do not repeat and contain numbers 1-9', () => {
    let sudokuInput = new Sudoku([1,2,3,4,5,5,7,8,9], [1,2,2,4,5,6,7,8,9]);
    expect(sudokuInput.checkNumbers(sudokuInput)).toEqual(false);
  });
});