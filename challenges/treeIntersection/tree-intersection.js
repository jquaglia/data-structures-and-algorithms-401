'use strict';

let treeIntersection = (tree1, tree2) => {
  const results = [];
  const tree1Array = tree1.preOrder();
  const tree2Array = tree2.preOrder();

  for (let i = 0; i < tree1Array.length; i++) {
    if (tree1Array[i] === tree2Array[i]){
      results[results.length] = tree1Array[i];
    } else { continue; }
  }

  return results;
};

module.exports = treeIntersection;