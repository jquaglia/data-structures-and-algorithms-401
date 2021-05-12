'use strict';

const test = require('../search-insert.js');

describe('testing function to search insert into a sorted array', () => {
  const arr = [2, 3, 7, 8, 9, 11];

  it('should return the index the number would be at if its not in the array in log n time', () => {
    expect(test(arr, 6)).toEqual(2);
    expect(test(arr, 1)).toEqual(0);
    expect(test(arr, 12)).toEqual(6);
  });

  it('should return the index of the number in log n time', () => {
    expect(test(arr, 8)).toEqual(3);
    expect(test(arr, 11)).toEqual(5);
  });
});