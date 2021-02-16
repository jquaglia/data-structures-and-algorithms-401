'use strict';

function insertShiftArray(array, value){
  const middle = array.length / 2;
  const middleIndex = Math.ceil(middle);
  array.splice(middleIndex, 0, value);
  return array;
}

module.exports = insertShiftArray;