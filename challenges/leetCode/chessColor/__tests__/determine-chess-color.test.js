'use strict';

const test = require('../determine-chess-color.js');

describe('testing function to determine if a square on a chessboard is white or black', () => {
  it('should return true if the square is white', () => {
    expect(test('a2')).toEqual(true);
    expect(test('c6')).toEqual(true);
    expect(test('h7')).toEqual(true);
  });

  it('should return false if the square is black', () => {
    expect(test('a1')).toEqual(false);
    expect(test('f4')).toEqual(false);
    expect(test('d2')).toEqual(false);
  });
});
