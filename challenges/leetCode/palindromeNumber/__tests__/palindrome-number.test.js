'use strict';

const test = require('../palindrome-number.js');

describe('testing function to determine if number is a palindrome', () => {
  it('should return true if the number is a palindrome', () => {
    expect(test(12321)).toEqual(true);
  });

  it('should return false if the number is not a palindrome', () => {
    expect(test(1234)).toEqual(false);
  });
  
  it('should return false if the number is negative (not a palindrome)', () => {
    expect(test(-343)).toEqual(false);
  });
});
