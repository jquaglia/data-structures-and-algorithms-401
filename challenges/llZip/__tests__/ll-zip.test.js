'use strict';

const linkedList = require('../ll-zip.js');

describe('testing the zip a linked list function', () => {
  it('should properly return the zip of two lists', () => {
    const listOne = new linkedList.ll;
    listOne.head = new linkedList.node(1);
    listOne.append(3);
    listOne.append(2);

    const listTwo = new linkedList.ll;
    listTwo.head = new linkedList.node(5);
    listTwo.append(9);
    listTwo.append(4);
    const test = linkedList.zip(listOne, listTwo).toString();
    
    // console.log(test);
    expect(test).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> {NULL}');
  });

  it('should properly return the zip of two lists', () => {
    const listOne = new linkedList.ll;
    listOne.head = new linkedList.node(1);
    listOne.append(3);

    const listTwo = new linkedList.ll;
    listTwo.head = new linkedList.node(5);
    listTwo.append(9);
    listTwo.append(4);
    const test = linkedList.zip(listOne, listTwo).toString();
    
    // console.log(test);
    expect(test).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> {NULL}');
  });

  it('should properly return the zip of two lists', () => {
    const listOne = new linkedList.ll;
    listOne.head = new linkedList.node(1);
    listOne.append(3);
    listOne.append(2);

    const listTwo = new linkedList.ll;
    listTwo.head = new linkedList.node(5);
    listTwo.append(9);
    const test = linkedList.zip(listOne, listTwo).toString();
    
    // console.log(test);
    expect(test).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> {NULL}');
  });
});