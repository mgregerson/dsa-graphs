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
  removeVertex(vertex) {}

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
    // console.log(seen.map(node => node.val), 'is this map working?')
    return seen.map((node) => node.value);
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    const nodesToVisitQueue = [start];
    const seen = [];

    while (nodesToVisitQueue.length) {
      let node = nodesToVisitQueue.shift();

      if (!seen.includes(node)) {
        for (let adjNode of node.adjacent) {
          nodesToVisitQueue.push(adjNode);
        }

        seen.push(node);
      }
    }

    return seen.map((node) => node.value);
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) {
    const nodeToVisitQueue = [start];
    const seen = [];
    const stepsTaken = [];
    let pathLength = 0;

    // 2nd loop = queue = [T, R, M]
      // seen = [H]
    // 3rd loop
      // queue = [R, M, I]
      // seen = [H, T]
    // 4th loop
      // queue =
    
    
    // if R adjacents don't include end, add to seen, add each adjacent
    // to queue, increase path length by one.
      // seen = [r], [I, T, H], pathLength = 1;
        // seen = [R, I], [T, H], pathLength = 1;
          // [R, I, T], [H], pathLength = 1;
            // increment pathlength by 1, return pathLength;
    
    
    // 1st loop: Adjacents don't include, queue = [h], seen = [m], pathLength = 1,
      // 2nd Loop, adjacents don't include, queue = [T, R], seen = [m, h], pathLength = 2, 
        // 3rd loop, IT DOES, increment, return, 3
    
    while (nodeToVisitQueue.length) {
      let node = nodeToVisitQueue.shift();
      console.log('The queue is =', nodeToVisitQueue)
      console.log('The node is =', node)
      console.log('seen array = ', seen)
      if (!seen.includes(node)) {
        if (node === end) {
          stepsTaken.push(pathLength);
          pathLength = 0;
        } else {
          for (let adjNode of node.adjacent) {
            if (!seen.includes(adjNode) && !nodeToVisitQueue.includes(adjNode)) {
              nodeToVisitQueue.push(adjNode);
            }
          }
          seen.push(node);
          let seenStatus = [];
          for (let adjNode of node.adjacent) {
            if (seen.includes(adjNode)) {
              seenStatus.push(true);
            } else {
              seenStatus.push(false);
            }
          }
          console.log(seenStatus, node, 'SeenStatus and node')
          if (!seenStatus.includes(false)){
            pathLength += 1;
          }
          seenStatus = [];
        }
      }
    }
    console.log(stepsTaken, 'the number of stepsTaken')
  }
}

module.exports = { Graph, Node };
