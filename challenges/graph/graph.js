'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

function getEdge(graph, array) {
  let total = 0;
  loop1: for (let i = 0; i < array.length - 1; i++) {
    const neighbors = graph.getNeighbors(array[i]);

    loop2: for (let j = 0; j < neighbors.length; j++) {
      let nextPlace = array[i + 1].value;

      if (neighbors[j].vertex.value === nextPlace) {
        total += neighbors[j].weight;
        continue loop1;
      }
      continue loop2;
    }
    return `${false}, $0`;
  }
  return `${true}, $${total}`;
}

function depthFirstPre(graph, vertex) {
  const visitedVertices = new Set();

  visitedVertices.add(vertex);

  const traverse = (current, visited) => {
    visited.add(current);
    const neighbors = graph.getNeighbors(current);

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        traverse(neighbor.vertex, visited);
      }
    }
  };

  traverse(vertex, visitedVertices);
  return visitedVertices;
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  // helper function to help with traversals
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return null;
      // throw new Error('no neighbors for that vertex');
    }

    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(vertex) {
    const queue = [];
    const visited = new Set();

    queue.unshift(vertex);
    visited.add(vertex);

    while (queue.length) {
      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)) {
          continue;
        } else {
          visited.add(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }

    return visited;
  }

  depthFirstRecurse(vertex) {
    const visitedVertices = new Set();

    visitedVertices.add(vertex);

    const traverse = (current, visited) => {
      visited.add(current);
      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traverse(neighbor.vertex, visited);
        }
      }
    };

    traverse(vertex, visitedVertices);
    return visitedVertices;
  }

  depthFirst(vertex) {

    const stack = [];
    const visitedVertices = new Set();

    stack.push(vertex);
    visitedVertices.add(vertex);

    while (stack.length) {
      let currentVertex = stack.pop();
      visitedVertices.add(currentVertex);
      let neighbors = this.getNeighbors(currentVertex);
      if (!neighbors) { return null; }

      for (let neighbor of neighbors) {
        let neighborVertex = neighbor.vertex;

        if (visitedVertices.has(neighborVertex)) {
          continue;
        }
        else { stack.push(neighborVertex); }
      }
    }
    return visitedVertices;
  }

  size(vertex) {
    if (this.depthFirst(vertex)) {
      return this.depthFirst(vertex).size;
    } else { return null; }
  }

  includes(vertex, value) {

    const stack = [];
    const visitedVertices = new Set();

    stack.push(vertex);
    visitedVertices.add(vertex);

    while (stack.length) {
      let currentVertex = stack.pop();
      if (currentVertex.value === value) {
        return true;
      }
      visitedVertices.add(currentVertex);
      let neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {
        let neighborVertex = neighbor.vertex;

        if (visitedVertices.has(neighborVertex)) {
          continue;
        }
        else { stack.push(neighborVertex); }
      }
    }
    return false;
  }
}


let test = new Graph();

let a = new Vertex('A');
let b = new Vertex('B');
let c = new Vertex('C');
let d = new Vertex('D');
let e = new Vertex('E');
let f = new Vertex('F');
let g = new Vertex('G');
let h = new Vertex('H');

test.addVertex(a);
test.addVertex(b);
test.addVertex(c);
test.addVertex(d);
test.addVertex(e);
test.addVertex(f);
test.addVertex(g);
test.addVertex(h);

test.addEdge(a, b);
test.addEdge(a, d);
test.addEdge(b, c);
test.addEdge(c, g);
test.addEdge(b, d);
test.addEdge(d, e);
test.addEdge(d, h);
test.addEdge(d, f);
test.addEdge(h, f);

// console.log(depthFirstPre(test, a));

// const setSpread = test.breadthFirst(one);
// console.log(...setSpread);
// console.log(test.depthFirstRecurse(one));
// console.log(test.depthFirst(one));
// console.log(test.size(one));
// console.log(test.includes(one, 'five'));

module.exports = {
  Vertex,
  Edge,
  Graph,
  getEdge,
  depthFirstPre,
};