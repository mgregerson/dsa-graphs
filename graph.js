/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
   }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
   }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) { }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    let stack = [start];
    let seen = [];

   while (stack.length) {
     let node = stack.pop();
     if (!seen.includes(node)) {
       for (let adjacentNode of node.adjacent) {
        stack.push(adjacentNode);
       }
       seen.push(node);
     }
   }
    console.log('seen=', seen);
    // console.log(seen.map(node => node.val), 'is this map working?')
    return seen.map(node => node.value);
   }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    const nodesToVisitQueue = [start];
    const seen = [];

    while (nodesToVisitQueue.length) {
      let node = nodesToVisitQueue.shift();

      if(!seen.includes(node)){
        for (let adjNode of node.adjacent){
          nodesToVisitQueue.push(adjNode);
        }

        seen.push(node);
      }
    }

    return seen.map((node) => node.value);
   }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node }
