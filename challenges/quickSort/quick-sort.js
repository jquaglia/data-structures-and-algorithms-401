'use strict';

function quickSort(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (right > index) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

let example = [8,4,23,42,16,15];
console.log(quickSort(example, 0, 5));

module.exports = quickSort;