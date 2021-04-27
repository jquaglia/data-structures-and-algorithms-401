'use strict';

var squareIsWhite = function (coordinates) {
  let letters = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let hash = new Map();

  for (let i = 1; i < letters.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i % 2 !== 0) {
        if (j % 2 !== 0) {
          hash.set((letters[i] + numbers[j]), false);
        } else if (j % 2 === 0) {
          hash.set((letters[i] + numbers[j]), true);
        }
      } else if (i % 2 === 0) {
        if (j % 2 === 0) {
          hash.set((letters[i] + numbers[j]), false);
        } else if (j % 2 !== 0) {
          hash.set((letters[i] + numbers[j]), true);
        }
      }
      // console.log(letters[i], numbers[j]);
      // console.log(hash);
    }
  }
  // console.log(hash);
  return hash.get(coordinates);
};


var squareIsWhite2 = function (coordinates) {
  let hash = {
    a1: false,
    a2: true,
    a3: false,
    a4: true,
    a5: false,
    a6: true,
    a7: false,
    a8: true,
    b1: true,
    b2: false,
    b3: true,
    b4: false,
    b5: true,
    b6: false,
    b7: true,
    b8: false,
    c1: false,
    c2: true,
    c3: false,
    c4: true,
    c5: false,
    c6: true,
    c7: false,
    c8: true,
    d1: true,
    d2: false,
    d3: true,
    d4: false,
    d5: true,
    d6: false,
    d7: true,
    d8: false,
    e1: false,
    e2: true,
    e3: false,
    e4: true,
    e5: false,
    e6: true,
    e7: false,
    e8: true,
    f1: true,
    f2: false,
    f3: true,
    f4: false,
    f5: true,
    f6: false,
    f7: true,
    f8: false,
    g1: false,
    g2: true,
    g3: false,
    g4: true,
    g5: false,
    g6: true,
    g7: false,
    g8: true,
    h1: true,
    h2: false,
    h3: true,
    h4: false,
    h5: true,
    h6: false,
    h7: true,
    h8: false,
  };

  return hash[coordinates];
};

let squareIsWhite3 = (coordinates) => {
  return coordinates[0].charCodeAt(0) % 2 !== parseInt(coordinates[1]) % 2;
};

console.log(squareIsWhite3('h3'));