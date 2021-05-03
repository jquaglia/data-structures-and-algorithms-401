'use strict';

const test = require('../longest-common-prefix.js');

describe('testing function to return longest common prefix of a list of words', () => {
  it('should return the longest common prefix', () => {
    expect(test(['flower', 'flow', 'flight'])).toEqual('fl');
  });

  it('should return an empty string when no common prefix is found', () => {
    expect(test(['dog', 'racecar', 'car'])).toEqual('');
  });
  
  it('should work with a list with duplicate words', () => {
    expect(test(['flower', 'flow', 'flight', 'flower', 'flower'])).toEqual('fl');
    expect(test(['flower', 'flower', 'flower', 'flower'])).toEqual('flower');
  });
});