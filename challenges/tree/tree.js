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
      const array = [];
      const preOrder = (node) => {
        array.push(node.value);
        if (node.left) {
          preOrder(node.left);
        }
        if (node.right) {
          preOrder(node.right);
        }
      };
      let current = this.root;
      preOrder(current);
      return array;
  
    } catch (error) {
      console.error('Error with the tree', error);
    }
  }

  // recusive depth first traversal function
  postOrder() {
    try {
      const array = [];
      const postOrder = (node) => {
        if (node.left) {
          postOrder(node.left);
        }
        if (node.right) {
          postOrder(node.right);
        }
        array.push(node.value);
      };
      let current = this.root;
      postOrder(current);
      return array;

    } catch (error) {
      console.error('Error with the tree', error);
    }
  }

  // recusive depth first traversal function
  inOrder() {
    try {
      const array = [];
      const inOrder = (node) => {
        if (node.left) {
          inOrder(node.left);
        }
        array.push(node.value);
        if (node.right) {
          inOrder(node.right);
        }
      };
      let current = this.root;
      inOrder(current);
      return array;
      
    } catch (error) {
      console.error('Error with the tree', error);
    }
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let current = this.root;
    let newNode = new Node(value);

    if (!current) {
      this.root = newNode;
      return;
    }

    const insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        if (!node.left) { node.left = newNode; }
        else { insertNode(node.left, newNode); }
      } else {
        if (!node.right) { node.right = newNode; }
        else { insertNode(node.right, newNode); }
      }
    };

    insertNode(current, newNode);
  }

  inOrder() {
    const array = [];
    const inOrder = (node) => {
      if (node.left) {
        inOrder(node.left);
      }
      array.push(node.value);
      if (node.right) {
        inOrder(node.right);
      }
    };
    let current = this.root;
    inOrder(current);
    return array;
  }

  contains(value) {
    const array = [];
    const inOrder = (node) => {
      if (node.left) {
        inOrder(node.left);
      }
      array.push(node.value);
      if (node.right) {
        inOrder(node.right);
      }
    };
    let current = this.root;
    inOrder(current);
    
    let i = array.length;
    while(i--) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }
}

// const tree = new BiTree();
// tree.root = new Node(5);
// tree.root.left = new Node(10);
// tree.root.left.left = new Node(0);
// tree.root.left.right = new Node(20);
// tree.root.right = new Node(15);
// tree.root.right.right = new Node(25);

// console.log(tree);
// console.log(tree.preOrder());
// console.log(tree.preorder(tree.root));
// console.log(tree.postOrder());
// console.log(tree.inOrder());

// const bTree = new BSTree();
// // bTree.root = new Node(3);
// bTree.add(3);
// bTree.add(2);
// bTree.add(5);
// bTree.add(1);

// console.log(bTree.contains(8));
// console.log(bTree.inOrder());
// console.log(bTree.root);

module.exports = {
  BSTree,
  BiTree,
  Node,
};