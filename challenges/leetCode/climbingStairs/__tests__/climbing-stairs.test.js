'use strict';

const test = require('../climbing-stairs.js');

describe('testing function to find how many ways to climb to the top of the stairs', () => {

    it('should return the amount of ways to get to the top (fib numbers)', () => {
        expect(test(8)).toEqual(34);
    });
});