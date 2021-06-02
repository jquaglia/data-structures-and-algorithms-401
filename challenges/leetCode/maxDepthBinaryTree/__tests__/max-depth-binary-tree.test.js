'use strict';

const test = require('../max-depth-binary-tree.js');
const a = require('../../../tree/tree.js');

const aTree = new a.BiTree();
aTree.root = new a.Node(1);
aTree.root.left = new a.Node(3);
aTree.root.right = new a.Node(2);
aTree.root.right.left = new a.Node(9);
aTree.root.right.left.right = new a.Node(5);
aTree.root.right.right = new a.Node(7);

const bTree = new a.BiTree();
// bTree.root = new a.Node();

describe('testing function determine max depth of binary tree', () => {

    it('should return max depth', () => {
        // console.log(aTree);
        expect(test(aTree.root)).toEqual(4);
    });

    it('should handle edge case where tree has no nodes', () => {
        expect(test(bTree.root)).toEqual(0);

        bTree.root = new a.Node();

        expect(test(bTree.root)).toEqual(1);
    });
});