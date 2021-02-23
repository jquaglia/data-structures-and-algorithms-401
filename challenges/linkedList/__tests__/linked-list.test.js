'use strict';

const linkedList = require('../linked-list.js');

describe('testing the linked list module', () => {
  it('should instantiate an empty linked list', () => {
    const list = new linkedList.ll();

    expect(list).toEqual({ head: null });
  });

  it('should insert a new value to the head of the list', () => {
    let insertNode = new linkedList.ll();
    insertNode.insert('fish');
    insertNode.insert('fish2');

    expect(insertNode.head.value).toEqual('fish2');
  });

  it('should properly point to the first node in the linked list as the head', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);

    expect(list.head.value === 0).toBeTruthy;
  });

  it('should properly insert multiple nodes to the first in the linked list', () => {
    let insertNode = new linkedList.ll();
    for (let i = 1; i <= 3; i++) {
      insertNode.insert(`test${i}`);
    }

    expect(insertNode.head.next.next.value).toEqual('test1');
    expect(insertNode.head.next.value).toEqual('test2');
    expect(insertNode.head.value).toEqual('test3');
  });

  it('will return true when finding a value within the linked list that exists', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const doesInclude = list.includes(2);

    expect(doesInclude).toEqual(true);
  });

  it('will return false when the value is not included in the linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const doesNotInclude = list.includes(9);

    expect(doesNotInclude).toEqual(false);
  });

  it('can return a string representing all the values in the linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node('D');
    list.head.next = new linkedList.node('Likes');
    list.head.next.next = new linkedList.node('NaN');
    list.head.next.next.next = new linkedList.node('Not');
    list.insert('Jason');
    const test = list.toString();

    expect(test).toEqual('{ Jason } -> { D } -> { Likes } -> { NaN } -> { Not } -> {NULL}');
  });

  it('can successfully add a node to the end of the linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.append(3);

    expect(list.head.next.next.value).toEqual(3);
  });

  it('can successfully add multiple nodes to the end of the linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.append(2);
    list.append(3);

    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
  });

  it('can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.insertBefore(2, 4);

    // console.log('LIST', list);
    expect(list.head.next.value).toEqual(4);
  });

  it('can successfully insert a node before before the first node of a linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.insertBefore(1, 4);

    expect(list.head.value).toEqual(4);
  });

  it('can successfully insert a node after a node in the middle of the linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.insertAfter(1, 4);

    expect(list.head.next.value).toEqual(4);
  });

  it('can successfully insert a node after the last node of the linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(1);
    list.head.next = new linkedList.node(2);
    list.insertAfter(2, 4);

    expect(list.head.next.next.value).toEqual(4);
  });

  it('should return null where k is greater than the lenght of the linked list', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const kReturn = list.kthFromEnd(7);

    expect(kReturn).toEqual(null);
  });

  it('should return where k and the length of the list are the same', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const kReturn = list.kthFromEnd(4);

    expect(kReturn).toEqual(0);
  });

  it('should return where k is not a positive integer', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const kReturn = list.kthFromEnd(7);

    expect(kReturn).toEqual(null);
  });

  it('should return where the linked list is of a size 1', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    const kReturn = list.kthFromEnd(1);

    expect(kReturn).toEqual(0);
  });

  it('should return the value where k is not at the end, but somewhere in the middle', () => {
    const list = new linkedList.ll();
    list.head = new linkedList.node(0);
    list.head.next = new linkedList.node(1);
    list.head.next.next = new linkedList.node(2);
    list.head.next.next.next = new linkedList.node(3);
    const kReturn = list.kthFromEnd(2);

    expect(kReturn).toEqual(2);
  });
});