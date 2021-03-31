'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BiTree {
  constructor() {
    this.root = null;
  }

  // recusive depth first traversal function
  preOrder() {
    try {
      let current = this.root;
      const array = [];
      const preOrder = (node) => {
        array[array.length] = node.value;
        if (node.left) { preOrder(node.left); }
        if (node.right) { preOrder(node.right); }
      };

      preOrder(current);
      return array;

    } catch (error) {
      console.error('Error with the tree', error);
    }
  }

  // recusive depth first traversal function
  postOrder() {
    try {
      let current = this.root;
      const array = [];
      const postOrder = (node) => {
        if (node.left) { postOrder(node.left); }
        if (node.right) { postOrder(node.right); }
        array[array.length] = node.value;
      };

      postOrder(current);
      return array;

    } catch (error) {
      console.error('Error with the tree', error);
    }
  }

  // recusive depth first traversal function
  inOrder() {
    try {
      let current = this.root;
      const array = [];
      const inOrder = (node) => {
        if (node.left) { inOrder(node.left); }
        array[array.length] = node.value;
        if (node.right) { inOrder(node.right); }
      };

      inOrder(current);
      return array;

    } catch (error) {
      console.error('Error with the tree', error);
    }
  }

  findMaxValue() {
    let current = this.root;
    if (!current) { throw 'Error, no nodes in tree'; }

    const findMax = (node) => {
      if (!node) { return; }
      let result = node.value;
      let leftResult = findMax(node.left);
      let rightResult = findMax(node.right);
      if (leftResult > result) { result = leftResult; }
      if (rightResult > result) { result = rightResult; }
      return result;
    };
    return findMax(current);
  }

  breadthFirstTraversal() {
    let current = this.root;
    const levels = [];

    const traverse = (node, depth) => {
      let array = levels[depth];
      if (!node) { return null; }
      if (!levels[depth]) { levels[depth] = [node.value]; }
      else { array[array.length] = node.value; }
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    };
    traverse(current, 0);

    const flatten = (arr, result = []) => {
      for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (Array.isArray(value)) {
          flatten(value, result);
        } else {
          result[result.length] = value;
        }
      }
      return result;
    };

    // I hate myself for doing this but RECURSION!
    return flatten(levels);
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let current = this.root;
    let newNode = new Node(value);

    if (!current) { return this.root = newNode; }

    const insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        if (!node.left) { node.left = newNode; }
        else { insertNode(node.left, newNode); }
      }
      else {
        if (!node.right) { node.right = newNode; }
        else { insertNode(node.right, newNode); }
      }
    };

    insertNode(current, newNode);
  }

  inOrder() {
    let current = this.root;
    const array = [];
    const inOrder = (node) => {
      if (node.left) { inOrder(node.left); }
      array[array.length] = node.value;
      if (node.right) { inOrder(node.right); }
    };

    inOrder(current);
    return array;
  }

  contains(value) {
    let current = this.root;
    const map = {};
    const inOrder = (node) => {
      if (node.left) { inOrder(node.left); }
      map[node.value] = node.value;
      if (node.right) { inOrder(node.right); }
    };
    inOrder(current);
    return !!(map[value]);
  }
}

const tree = new BiTree();
tree.root = new Node(5);
tree.root.left = new Node(10);
tree.root.left.left = new Node(0);
tree.root.left.right = new Node(20);
tree.root.right = new Node(15);
tree.root.right.right = new Node(25);

// console.log(tree);
// console.log(tree.preOrder());
// console.log(tree.preorder(tree.root));
// console.log(tree.postOrder());
// console.log(tree.inOrder());
// console.log(tree.root);
// console.log(tree.breadthFirstTraversal());
// console.log(tree.findMaxValue());

// const bTree = new BSTree();
// bTree.add(3);
// bTree.add(2);
// bTree.add(5);
// bTree.add(1);

// console.log(bTree.contains(1));
// console.log(bTree.inOrder());
// console.log(bTree.root);

module.exports = {
  BSTree,
  BiTree,
  Node,
};