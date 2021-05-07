'use strict';

const test = require('../remove-element.js');

describe('testing function to remove all instances of a target value', () => {
  const numbers = [0, 3, 1, 1, 3, 2, 1, 3, 2, 4];

  it('should remove duplicates in place', () => {
    expect(test(numbers, 3)).toEqual(7);
    expect(numbers).toEqual([0, 1, 1, 2, 1, 2, 4]);
  });

  it('should remove duplicates in place with first index repeated', () => {
    expect(test(numbers, 2)).toEqual(5);
    expect(numbers).toEqual([0, 1, 1, 1, 4]);
  });
});