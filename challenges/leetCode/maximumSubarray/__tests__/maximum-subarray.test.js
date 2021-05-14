'use strict';

const test = require('../maximum-subarray.js');

describe('testing function to search insert into a sorted array', () => {

  it('should return maximum value of a subarray within the array', () => {
    expect(test([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  it('should return maximum value of a subarray within the array with only 1 value in the array', () => {
    expect(test([3])).toEqual(3);
  });
});