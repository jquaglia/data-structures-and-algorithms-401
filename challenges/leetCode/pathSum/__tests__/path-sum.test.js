'use strict';

const test = require('../path-sum.js');
const tree = require('../../../tree/tree.js');

const bTree = new tree.BiTree();

const a = new tree.Node(5);
const b = new tree.Node(4);
const c = new tree.Node(8);
const d = new tree.Node(11);
const e = new tree.Node(7);
const f = new tree.Node(2);
const g = new tree.Node(13);
const h = new tree.Node(4);
const i = new tree.Node(1);

bTree.root = a;
bTree.root.left = b;
bTree.root.right = c;
bTree.root.left.left = d;
bTree.root.left.left.left = e;
bTree.root.left.left.right = f;
bTree.root.right.left = g;
bTree.root.right.right = h;
bTree.root.right.right.right = i;

describe('testing function to determine if there is a path sum in a tree that equals the target value', () => {

  it('should return true if the target path sum is found', () => {
    expect(test(bTree.root, 22)).toEqual(true);
  });

  it('should return false if no target sum is found', () => {
    expect(test(bTree.root, 5)).toEqual(false);
  });
});