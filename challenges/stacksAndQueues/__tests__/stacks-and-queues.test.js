'use strict';

const stuff = require('../stacks-and-queues.js');

describe('testing basic stack functionality', () => {
  const stack = new stuff.stack;
  const nodeA = new stuff.node('A');
  const nodeB = new stuff.node('B');
  
  it('Can successfully push onto a stack', () => {
    stack.push(nodeA);
    
    expect(stack.top.value).toEqual('A');
  });
  
  it('Can successfully push multiple values onto a stack', () => {
    stack.push(nodeA);
    stack.push(nodeB);

    expect(stack.top.value).toEqual('B');
    expect(stack.top.next.value).toEqual('A');
  });

  it('Can successfully pop off the stack', () => {
    stack.push(nodeA);
    stack.push(nodeB);

    expect(stack.pop()).toEqual('B');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    stack.pop();

    expect(stack.pop()).toEqual('B');
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Can successfully peek the next item on the stack', () => {
    stack.push(nodeA);
    
    expect(stack.peek()).toEqual(stack.top.value);
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new stuff.stack;
  
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    const stack = new stuff.stack;
  
    expect(stack.isEmpty()).toBeTruthy();
    expect(() => stack.pop()).toThrow('Error no nodes in stack');
    expect(() => stack.peek()).toThrow('Error no nodes in stack');
  });
});


describe('testing basic queue functionality', () => {
  const q = new stuff.que;
  const nodeA = new stuff.node('A');
  const nodeB = new stuff.node('B');

  it('Can successfully enqueue into a queue', () => {
    q.enqueue(nodeA);

    expect(q.front.value).toEqual('A');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    q.enqueue(nodeA);
    q.enqueue(nodeB);

    expect(q.front.value).toEqual('A');
    expect(q.front.next.value).toEqual('B');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {

    expect(q.dequeue()).toEqual('A');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    
    expect(q.peek()).toEqual(q.front.value);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    q.enqueue(nodeA);
    q.dequeue();
    q.dequeue();
  
    expect(q.isEmpty()).toBeTruthy();
  });

  it('Can successfully instantiate an empty queue', () => {
    const q = new stuff.que;
  
    expect(q.isEmpty()).toBeTruthy();
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
  
    expect(q.isEmpty()).toBeTruthy();
    expect(() => q.dequeue()).toThrow('Error no nodes in q');
    expect(() => q.peek()).toThrow('Error no nodes in q');
  });
});