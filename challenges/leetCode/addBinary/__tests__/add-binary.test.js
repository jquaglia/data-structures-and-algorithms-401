'use strict';

const test = require('../add-binary.js');

describe('testing function to add binary numbers', () => {

  it('should successfully add binary numbers together', () => {
    expect(test('11', '1')).toEqual('100');
  });

  it('should successfully add binary numbers too large to show in base 10', () => {
    let a = '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101';
    let b = '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011';

    expect(test(a, b)).toEqual('110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000');
  });
});