'use strict';

const test = require('../tree.js');

describe('testing tree methods', () => {
  const tree = new test.BSTree();
  const biTree = new test.BiTree();
  const nodeA = new test.Node(5);
  const nodeB = new test.Node(10);
  const nodeC = new test.Node(15);
  biTree.root = new test.Node(5);
  biTree.root.left = nodeB;
  biTree.root.right = nodeC;
  biTree.root.right.right = nodeA;

  it('can successfully instantiate an empty tree', () => {
    expect(tree.root).toEqual(null);
  });

  it('can successfully instantiate a tree with a single root node', () => {
    tree.add(6);

    expect(tree.root.value).toEqual(6);
    expect(tree.root.left).toEqual(null);
    expect(tree.root.right).toEqual(null);
  });

  it('can successfully add a left child and a right child to a single node', () => {
    tree.add(3);
    tree.add(9);

    expect(tree.root.value).toEqual(6);
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.right.value).toEqual(9);
  });

  it('can successfully add a left child and a right child to a single node', () => {
    tree.add(3);
    tree.add(9);

    expect(tree.root.value).toEqual(6);
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.right.value).toEqual(9);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    expect(biTree.preOrder()).toEqual([5, 10, 15, 5]);
  });

  it('Can successfully return a collection from a post order traversal', () => {
    expect(biTree.postOrder()).toEqual([10, 5, 15, 5]);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    expect(biTree.inOrder()).toEqual([10, 5, 15, 5]);
  });

  it('Can successfully determine with a boolean if a value is in a BSTree', () => {
    expect(tree.contains(8)).toEqual(false);
    expect(tree.contains(9)).toEqual(true);
  });

  it('Can successfully find the max value in a Binary Tree', () => {
    expect(biTree.findMaxValue()).toEqual(15);
  });
});