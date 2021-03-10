'use strict';

const test = require('../fizz-buzz-tree.js');

describe('testing fizzBuzzTree function', () => {
  const tree = new test.tree(3);
  tree.root = new test.node(0, tree.k);
  tree.root.children[0] = new test.node(1, tree.k);
  tree.root.children[1] = new test.node(2, tree.k);
  tree.root.children[2] = new test.node(3, tree.k);
  tree.root.children[0].children[0] = new test.node(4, tree.k);
  tree.root.children[0].children[1] = new test.node(5, tree.k);
  tree.root.children[1].children[0] = new test.node(6, tree.k);
  const fBT = test.fb(tree);
  

  it('should change numbers divisible by 3 to Fizz', () => {
    expect(fBT.root.children[2].value).toEqual('Fizz');
  });

  it('should change numbers divisible by 5 to Buzz', () => {
    expect(fBT.root.children[0].children[1].value).toEqual('Buzz');
  });

  it('should change numbers divisible by 3 and 5 to FizzBuzz', () => {
    expect(fBT.root.value).toEqual('FizzBuzz');
  });

  it('should change numbers not divisible by 3 or 5 to strings', () => {
    expect(fBT.root.children[1].value).toEqual('2');
  });

  it('should create a new tree and leave the old tree unchanged', () => {
    expect(fBT.root.value).toEqual('FizzBuzz');
    expect(fBT.root.children[2].value).toEqual('Fizz');
    expect(fBT.root.children[0].children[1].value).toEqual('Buzz');
    expect(fBT.root.children[1].value).toEqual('2');
    expect(tree.root.value).toEqual(0);
    expect(tree.root.children[2].value).toEqual(3);
    expect(tree.root.children[0].children[1].value).toEqual(5);
    expect(tree.root.children[1].value).toEqual(2);
  });
});

