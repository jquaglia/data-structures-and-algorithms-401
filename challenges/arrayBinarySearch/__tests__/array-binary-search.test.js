'use strict';

const binarySearch = require('../array-binary-search.js');

describe('testing the binary search', () => {
  it('should return an index that is the same as the given key', () => {
    const binarySearchOne = binarySearch([4, 8, 15, 16, 23, 42], 15);
 
    expect(binarySearchOne).toEqual(2);
  });

  it('should return -1 if the key is not found in the array', () => {
    const binarySearchTwo = binarySearch([11, 22, 33, 44, 55, 66, 77], 90);
    const binarySearchThree = binarySearch([1, 2, 3, 5, 6, 7], 4);

    expect(binarySearchTwo).toEqual(-1);
    expect(binarySearchThree).toEqual(-1);
  });
});