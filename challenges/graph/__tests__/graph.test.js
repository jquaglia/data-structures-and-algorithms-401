'use strict';

const test = require('../graph.js');
const graph = new test.Graph;

const one = new test.Vertex('one');
const two = new test.Vertex('two');
const three = new test.Vertex('three');
const four = new test.Vertex('four');
const five = new test.Vertex('five');
const six = new test.Vertex('six');

graph.addVertex(one);
graph.addVertex(two);
graph.addVertex(three);
graph.addVertex(four);
graph.addVertex(five);
graph.addVertex(six);

graph.addEdge(one, three);
graph.addEdge(two, four);
graph.addEdge(one, four);
graph.addEdge(four, two);
graph.addEdge(four, five);
graph.addEdge(two, six);

describe('testing the instantiating of a proper hash table', () => {

  it('Node can be successfully added to the graph', () => {

    expect(graph.)
  });

  it('An edge can be successfully added to the graph', () => {

  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {

  });

  it('All appropriate neighbors can be retrieved from the graph', () => {

  });

  it('Neighbors are returned with the weight between nodes included', () => {

  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {

  });

  it('A graph with only one node and edge can be properly returned', () => {

  });

  it('An empty graph properly returns null', () => {

  });
});