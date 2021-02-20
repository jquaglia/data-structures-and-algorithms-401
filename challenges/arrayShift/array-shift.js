'use strict';

function insertShiftArray(array, value){
  // const middle = array.length / 2;
  const middle = Math.ceil(array.length / 2);
  const result = [];
  for(let i = 0; i < middle; i++){
    result[result.length] = array[i];
  }
  result[middle] = value;
  for(let i = middle; i < array.length; i++){
    result[result.length] = array[i];
  }
  // console.log(result);
  return result;
}

module.exports = insertShiftArray;