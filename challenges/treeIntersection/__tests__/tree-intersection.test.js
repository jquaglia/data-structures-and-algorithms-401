'use strict';

const treeIntersection = require('../tree-intersection.js');
const tree = require('../../tree/tree.js');

const bTree1 = new tree.BiTree();
bTree1.root = new tree.Node(150);
bTree1.root.left = new tree.Node(100);
bTree1.root.left.left = new tree.Node(75);
bTree1.root.left.right = new tree.Node(160);
bTree1.root.left.right.right = new tree.Node(175);
bTree1.root.left.right.left = new tree.Node(125);
bTree1.root.right = new tree.Node(250);
bTree1.root.right.left = new tree.Node(200);
bTree1.root.right.right = new tree.Node(350);
bTree1.root.right.right.right = new tree.Node(500);
bTree1.root.right.right.left = new tree.Node(300);

const bTree2 = new tree.BiTree();
bTree2.root = new tree.Node(42);
bTree2.root.left = new tree.Node(100); //
bTree2.root.left.left = new tree.Node(15);
bTree2.root.left.right = new tree.Node(160); //
bTree2.root.left.right.right = new tree.Node(175); //
bTree2.root.left.right.left = new tree.Node(125); //
bTree2.root.right = new tree.Node(600);
bTree2.root.right.left = new tree.Node(200); //
bTree2.root.right.right = new tree.Node(350); //
bTree2.root.right.right.right = new tree.Node(500); //
bTree2.root.right.right.left = new tree.Node(4);


describe('Testing tree intersection function', () => {
  it('Should return an array of all of the common values in two different binary trees', () => {
    const result = treeIntersection(bTree1, bTree2);

    expect(result).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });
});