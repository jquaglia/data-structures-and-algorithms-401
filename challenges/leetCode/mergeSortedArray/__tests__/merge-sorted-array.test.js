'use strict';

const test = require('../merge-sorted-array.js');

describe('testing function to merge sorted arrays', () => {

    it('should return merged arrays', () => {
        expect(test([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
            .toEqual([1, 2, 2, 3, 5, 6]);
    });

    it('should handle edge cases with zeroes', () => {
        expect(test([0], 0, [1], 1)).toEqual([1]);

        expect(test([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3))
            .toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
    });
});