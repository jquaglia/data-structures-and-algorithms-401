'use strict';

const test = require('../length-of-last-word.js');

describe('testing function return the length of the last word in a string', () => {

  it('should return the length of the last word', () => {
    expect(test('Hello World')).toEqual(5);
  });

  it('should return the length of the last word with trailing spaces', () => {
    expect(test('Hello World  ')).toEqual(5);
  });

  it('should return 0 when no word is present', () => {
    expect(test('  ')).toEqual(0);
  });
});