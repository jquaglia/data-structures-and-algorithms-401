'use strict';

const test = require('../summary-ranges.js');

describe('testing the array reverse module', () => {
  it('should return the smallest sorted list of ranges that cover all the numbers in the array exactly', () => {

    expect(test([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
    expect(test([0, 2, 3, 4, 6, 8, 9])).toEqual(["0", "2->4", "6", "8->9"]);
    expect(test([])).toEqual([]);
    expect(test([-1])).toEqual(["-1"]);
    expect(test([0])).toEqual(["0"]);
  });
});