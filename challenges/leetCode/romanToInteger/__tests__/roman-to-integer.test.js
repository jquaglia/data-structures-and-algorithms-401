'use strict';

const test = require('../roman-to-integer.js');

describe('testing function to turn roman numerals into an integer ', () => {
  it('should return the correct integer when given a roman numeral', () => {
    expect(test('III')).toEqual(3);
  });

  it('should return the correct integer when given a roman numeral with a smaller numeral before a larger one', () => {
    expect(test('IV')).toEqual(4);
    expect(test('IX')).toEqual(9);
  });
  
  it('should return the correct integer from larger numerals as well', () => {
    expect(test('LVIII')).toEqual(58);
    expect(test('MCMXCIV')).toEqual(1994);
  });
});
