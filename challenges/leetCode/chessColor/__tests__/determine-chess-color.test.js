'use strict';

const test = require('../reverse-integer.js');

describe('testing function to reverse a signed 32-bit integer', () => {
  it('should return the reverse of a 32-bit integer', () => {
    expect(test(422355)).toEqual(553224);
  });

  it('should return the reverse of a negative 32-bit integer', () => {
    expect(test(-4379)).toEqual(-9734);
  });
  
  it('should return 0 when the integer is over 32 bits', () => {
    expect(test(103293899)).toEqual(998392301);
    expect(test(1032938999)).toEqual(0);
  });
});
