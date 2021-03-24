'use strict';

const quickSort = require('../quick-sort.js');

describe('Testing merge sort function', () => {
  it ('should sort the array in ascending order', () => {
    let sampleArray = [8, 4, 23, 42, 16, 15];
    let test = quickSort(sampleArray, 0, 5);
    expect(test).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it ('should sort a reverse sorted array in ascending order', () => {
    let sampleArray = [20, 18, 12, 8, 5, -2];
    let test = quickSort(sampleArray, 0, 5);
    expect(test).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it ('should sort a few uniques array in ascending order', () => {
    let sampleArray = [5, 12, 7, 5, 5, 7];
    let test = quickSort(sampleArray, 0, 5);
    expect(test).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it ('should finish sorting a nearly sorted array in ascending order', () => {
    let sampleArray = [2, 3, 5, 7, 13, 11];
    let test = quickSort(sampleArray, 0, 5);
    expect(test).toEqual([2, 3, 5, 7, 11, 13]);
  });
});