'use strict';

const test = require('../plus-one.js');

describe('testing function to add 1 to an array of decimal digits that represent a number ie. [1,2,3] is 123', () => {

  it('should add 1 to the number', () => {
    expect(test([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it('should add 1 properly to a number ending in 9', () => {
    expect(test([2, 3, 6, 9, 4, 2, 9])).toEqual([2, 3, 6, 9, 4, 3, 0]);
    expect(test([2, 3, 6, 9, 9, 9, 9])).toEqual([2, 3, 7, 0, 0, 0, 0]);
    expect(test([9])).toEqual([1, 0]);
  });
});
