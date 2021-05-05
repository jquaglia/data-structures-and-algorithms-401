'use strict';

const test = require('../valid-parentheses.js');

describe('testing function to test for balanced parentheses', () => {
  it('should return true for balanced brackets', () => {
    expect(test('{}')).toBeTruthy();
  });

  it('should return true for balanced brackets', () => {
    expect(test('{}(){}')).toBeTruthy();
  });

  it('should return false for unbalanced brackets', () => {
    expect(test('{}(}')).toBeFalsy();
  });

  it('should return false for unbalanced brackets', () => {
    expect(test('{}(')).toBeFalsy();
  });
});