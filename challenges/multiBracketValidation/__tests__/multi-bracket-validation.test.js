'use strict';

const test = require('../multi-bracket-validation.js');

describe('testing multi bracket validation', () => {
  it('should return true for balanced brackets', () => {
    const testOne = test('{}');

    expect(testOne).toBeTruthy();
  });

  it('should return true for balanced brackets', () => {
    const testOne = test('{}(){}');

    expect(testOne).toBeTruthy();
  });

  it('should return true for balanced brackets', () => {
    const testOne = test('()[[Extra Characters]]');

    expect(testOne).toBeTruthy();
  });

  it('should return true for balanced brackets', () => {
    const testOne = test('(){}[[]]');

    expect(testOne).toBeTruthy();
  });

  it('should return true for balanced brackets', () => {
    const testOne = test('{}{Code}[Fellows](())');

    expect(testOne).toBeTruthy();
  });

  it('should return false for unbalanced brackets', () => {
    const testOne = test('[({}]');

    expect(testOne).toBeFalsy();
  });

  it('should return false for unbalanced brackets', () => {
    const testOne = test('(](');

    expect(testOne).toBeFalsy();
  });

  it('should return false for unbalanced brackets', () => {
    const testOne = test('{(})');

    expect(testOne).toBeFalsy();
  });
});