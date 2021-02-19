'use strict';

function insertShiftArray(array, value){
  const middle = array.length / 2;
  const middleIndex = Math.ceil(middle);
  const result = [];
  for(let i = 0; i < middleIndex; i++){
    result[result.length] = array[i];
  }
  result[middleIndex] = value;
  for(let i = middleIndex + 1; i < array.length + 1; i++){
    result[i] = array[i - 1];
  }
  console.log(result);
  return result;
}

module.exports = insertShiftArray;