'use strict';

const test = require('../remove-duplicates-sorted-array.js');

describe('testing function to remove duplicates from sorted array ', () => {
  const numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const nums = [1, 1, 2];

  it('should remove duplicates in place', () => {
    expect(test(nums)).toEqual(2);
    expect(nums).toEqual([1, 2]);
  });

  it('should remove duplicates in place with first index repeated', () => {
    expect(test(numbers)).toEqual(5);
    expect(numbers).toEqual([0, 1, 2, 3, 4]);
  });
});
