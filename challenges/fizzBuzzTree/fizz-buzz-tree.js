'use strict';

class KaryNode {
  constructor(value, size) {
    this.value = value;
    this.children = new Array(size); // [undefined, undefined, undefined]
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }

  breadth() {
    let current = null;
    let queue = [];

    queue.unshift(this.root);

    while (queue.length) {

      current = queue.pop();
      console.log(current.value);

      for (let i = 0; i < current.children.length; i++) {
        if (current.children[i]) {
          queue.unshift(current.children[i]);
        }
      }
    }

  }
}


function fizzBuzzTree(kTree) {
  let newTree = new KaryTree(kTree.k);
  newTree.root = new KaryNode(kTree.root.value, kTree.k);
  let current = kTree.root;
  let current2 = newTree.root;

  let queue = [];
  let queue2 = [];

  queue.unshift(current);
  queue2.unshift(current2);

  while (queue.length) {
    current = queue.pop();
    current2 = queue2.pop();

    if (current.value % 15 === 0) { current2.value = 'FizzBuzz'; }
    else if (current.value % 3 === 0) { current2.value = 'Fizz'; }
    else if (current.value % 5 === 0) { current2.value = 'Buzz'; }
    else { current2.value = current.value.toString(); }

    for (let i = 0; i < current.children.length; i++) {
      if (current.children[i]) {
        current2.children[i] = new KaryNode(i, karyTree.k);
        queue.unshift(current.children[i]);
        queue2.unshift(current2.children[i]);
      }
    }
  }
  // console.log('NEW', newTree.root);
  // console.log('OG', kTree.root);
  return newTree;
}


const karyTree = new KaryTree(3);

karyTree.root = new KaryNode(0, karyTree.k);
karyTree.root.children[0] = new KaryNode(1, karyTree.k);
karyTree.root.children[1] = new KaryNode(2, karyTree.k);
karyTree.root.children[2] = new KaryNode(3, karyTree.k);
karyTree.root.children[0].children[0] = new KaryNode(4, karyTree.k);
karyTree.root.children[0].children[1] = new KaryNode(5, karyTree.k);
karyTree.root.children[1].children[2] = new KaryNode(6, karyTree.k);

// karyTree.breadth();
fizzBuzzTree(karyTree);