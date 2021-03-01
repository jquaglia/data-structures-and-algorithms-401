'use strict';

const stuff = require('../queue-with-stacks.js');

describe('testing Pseudo Queue functionality', () => {
  const pseudoQueue = new stuff.queue();
  const nodeA = new stuff.node(20);
  const nodeB = new stuff.node(15);
  const nodeC = new stuff.node(10);
  const nodeD = new stuff.node(5);
  pseudoQueue.enqueue(nodeA);
  pseudoQueue.enqueue(nodeB);
  pseudoQueue.enqueue(nodeC);
  pseudoQueue.enqueue(nodeD);

  it('should insert value into the pseudo queue', () => {
    // console.log(pseudoQueue);
    expect(pseudoQueue.rear.top.value).toEqual(5);
  });

  it('should extract value from the pseudo queue', () => {
    pseudoQueue.dequeue();
    // console.log(pseudoQueue.dequeue().value);
    expect(pseudoQueue.dequeue().value).toEqual(15);
  });
});