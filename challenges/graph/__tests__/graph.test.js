'use strict';

const test = require('../graph.js');

describe('testing the instantiating of a proper graph', () => {
  const graph = new test.Graph();
  const one = new test.Vertex('one');
  const two = new test.Vertex('two');
  const three = new test.Vertex('three');
  const five = new test.Vertex('five');

  it('Node can be successfully added to the graph', () => {
    graph.addVertex(one);

    expect(graph.size(one)).toEqual(1);
    expect(graph.includes(one, 'one')).toBeTruthy();
  });

  it('An edge can be successfully added to the graph', () => {
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addEdge(one, two);
    graph.addEdge(one, three);

    // console.log(graph.adjacencyList.get(one)[0]);
    expect(graph.adjacencyList.get(one)[0].vertex.value).toEqual('two');
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    // console.log(graph.breadthFirst(one));
    expect(graph.breadthFirst(one)).toBeTruthy();
    expect(graph.breadthFirst(one).size).toEqual(3);
    expect(graph.breadthFirst(one).has(one)).toEqual(true);
    expect(graph.breadthFirst(one).has(two)).toEqual(true);
    expect(graph.breadthFirst(one).has(three)).toEqual(true);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    // console.log(graph.getNeighbors(one)[0].weight);
    expect(graph.getNeighbors(one)).toBeTruthy();
    expect(graph.getNeighbors(one)[0].vertex.value).toEqual('two');
    expect(graph.getNeighbors(one)[1].vertex.value).toEqual('three');
    expect(graph.getNeighbors(one)[0].weight).toEqual(0);
    expect(graph.getNeighbors(one)[1].weight).toEqual(0);
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    expect(graph.getNeighbors(one)).toBeTruthy();
    expect(graph.getNeighbors(one)[0].vertex.value).toEqual('two');
    expect(graph.getNeighbors(one)[1].vertex.value).toEqual('three');
    expect(graph.getNeighbors(one)[0].weight).toEqual(0);
    expect(graph.getNeighbors(one)[1].weight).toEqual(0);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(graph.breadthFirst(one).size).toEqual(3);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    const graphTwo = new test.Graph();
    graphTwo.addVertex(five);
    graphTwo.addEdge(five, null);
    // console.log(graphTwo.adjacencyList.get(five)[0]);
    expect(graphTwo.adjacencyList.get(five)[0].vertex).toEqual(null);
    expect(graphTwo.adjacencyList.get(five)[0].weight).toEqual(0);
  });

  it('An empty graph properly returns null', () => {
    const graphThree = new test.Graph();
    // console.log(graphThree.size(null));
    expect(graphThree.size(null)).toEqual(null);
  });

  it('Should complete a breadth first traversal of a graph', () => {
    // console.log(graph.breadthFirst(one));
    const graphFour = new test.Graph();
    const Pandora = new test.Vertex('Pandora');
    const Arendelle = new test.Vertex('Arendelle');
    const Metroville = new test.Vertex('Metroville');
    const Monstropolis = new test.Vertex('Monstropolis');
    const Narnia = new test.Vertex('Narnia');
    const Naboo = new test.Vertex('Naboo');

    graphFour.addVertex(Pandora);
    graphFour.addVertex(Arendelle);
    graphFour.addVertex(Metroville);
    graphFour.addVertex(Monstropolis);
    graphFour.addVertex(Narnia);
    graphFour.addVertex(Naboo);

    graphFour.addEdge(Pandora, Arendelle);
    graphFour.addEdge(Arendelle, Metroville);
    graphFour.addEdge(Arendelle, Monstropolis);
    graphFour.addEdge(Metroville, Narnia);
    graphFour.addEdge(Metroville, Naboo);
    graphFour.addEdge(Monstropolis, Metroville);
    graphFour.addEdge(Monstropolis, Naboo);
    graphFour.addEdge(Naboo, Narnia);

    // console.log(graphFour.breadthFirst(Pandora));
    expect(graphFour.breadthFirst(Pandora)).toBeTruthy();
    expect(graphFour.breadthFirst(Pandora).size).toEqual(6);
    expect(graphFour.breadthFirst(Pandora).has(Arendelle)).toEqual(true);
    expect(graphFour.breadthFirst(Pandora).has(Naboo)).toEqual(true);
    expect(graphFour.breadthFirst(Pandora).has(Metroville)).toEqual(true);
  });

  it('Should take in a graph and array and return if direct flights are available and how much it will cost', () => {
    // console.log(graph.breadthFirst(one));
    const graphFive = new test.Graph();
    const Pandora = new test.Vertex('Pandora');
    const Arendelle = new test.Vertex('Arendelle');
    const Metroville = new test.Vertex('Metroville');
    const Monstropolis = new test.Vertex('Monstropolis');
    const Narnia = new test.Vertex('Narnia');
    const Naboo = new test.Vertex('Naboo');

    graphFive.addVertex(Pandora);
    graphFive.addVertex(Arendelle);
    graphFive.addVertex(Metroville);
    graphFive.addVertex(Monstropolis);
    graphFive.addVertex(Narnia);
    graphFive.addVertex(Naboo);

    graphFive.addEdge(Pandora, Arendelle, 150);
    graphFive.addEdge(Metroville, Pandora, 82);
    graphFive.addEdge(Arendelle, Metroville, 99);
    graphFive.addEdge(Arendelle, Monstropolis, 42);
    graphFive.addEdge(Metroville, Narnia, 37);
    graphFive.addEdge(Metroville, Naboo, 26);
    graphFive.addEdge(Monstropolis, Metroville, 105);
    graphFive.addEdge(Monstropolis, Naboo, 73);
    graphFive.addEdge(Naboo, Narnia, 250);

    // console.log(graphFive.getNeighbors(Metroville));
    // console.log(test.getEdge(graphFive, [Metroville, Pandora]));
    // console.log(graphFive.breadthFirst(Pandora));
    expect(test.getEdge(graphFive, [Metroville, Pandora])).toEqual(`true, $82`);
    expect(test.getEdge(graphFive, [Arendelle, Monstropolis, Naboo])).toEqual(`true, $115`);
    expect(test.getEdge(graphFive, [Naboo, Pandora])).toEqual(`false, $0`);
    expect(test.getEdge(graphFive, [Narnia, Arendelle, Naboo])).toEqual(`false, $0`);
  });

  it('should take in an adjaceny list as a graph and return pre order depth first traversal', () => {
    // console.log(graph.breadthFirst(one));
    const graphSix = new test.Graph();
    let a = new test.Vertex('A');
    let b = new test.Vertex('B');
    let c = new test.Vertex('C');
    let d = new test.Vertex('D');
    let e = new test.Vertex('E');
    let f = new test.Vertex('F');
    let g = new test.Vertex('G');
    let h = new test.Vertex('H');

    graphSix.addVertex(a);
    graphSix.addVertex(b);
    graphSix.addVertex(c);
    graphSix.addVertex(d);
    graphSix.addVertex(e);
    graphSix.addVertex(f);
    graphSix.addVertex(g);
    graphSix.addVertex(h);

    graphSix.addEdge(a, b);
    graphSix.addEdge(a, d);
    graphSix.addEdge(b, c);
    graphSix.addEdge(c, g);
    graphSix.addEdge(b, d);
    graphSix.addEdge(d, e);
    graphSix.addEdge(d, h);
    graphSix.addEdge(d, f);
    graphSix.addEdge(h, f);

    const array = Array.from(test.depthFirstPre(graphSix, a));
    
    expect(test.depthFirstPre(graphSix, a).size).toEqual(8);
    expect(test.depthFirstPre(graphSix, a).has(b)).toEqual(true);
    expect(test.depthFirstPre(graphSix, a).has(h)).toEqual(true);
    expect(test.depthFirstPre(graphSix, a).has(f)).toEqual(true);
    expect(array[0].value).toEqual('A');
    expect(array[1].value).toEqual('B');
    expect(array[2].value).toEqual('C');
    expect(array[3].value).toEqual('G');
    expect(array[4].value).toEqual('D');
    expect(array[5].value).toEqual('E');
    expect(array[6].value).toEqual('H');
    expect(array[7].value).toEqual('F');
  });
});