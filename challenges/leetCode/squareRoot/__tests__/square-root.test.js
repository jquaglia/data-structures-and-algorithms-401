'use strict';

const test = require('../square-root.js');

describe('testing function to find truncated version of square root', () => {

    it('should find square root of a number', () => {
        expect(test(9)).toEqual(3);
    });

    it('should find square root of number without a perfect root', () => {
        expect(test(8)).toEqual(2);
    });
});