import Sudoku from './../src/sudoku.js';


describe('Sudoku', () => {
  let sudoku;
  beforeEach(() => {
    sudoku = new Sudoku([0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9]);
  });
  test('should correctly create a sudoku object with column and row', () => {
    // const sudoku = new Sudoku(0,5);
    expect(sudoku.row).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
});
