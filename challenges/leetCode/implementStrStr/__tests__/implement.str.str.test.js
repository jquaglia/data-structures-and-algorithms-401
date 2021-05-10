'use strict';

const test = require('../implement-str-str.js');

describe('testing function to find the index of a substring inside of a string', () => {

  it('should find the needle in the haystack', () => {
    expect(test('hello', 'll')).toEqual(2);
    expect(test('hlello', 'll')).toEqual(3);
    expect(test('aaaaa', 'bba')).toEqual(-1);
    expect(test('', '')).toEqual(0);
  });

});