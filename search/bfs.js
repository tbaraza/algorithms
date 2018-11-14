/**
 * Breadth first search can be used to find the shortest distance between nodes
 * Start from start node provided
 * 1. Visit adjacent unvisited node
 * 2. Mark it visited by adding it to a queue
 * 3. If no adjacent node is found, remove the first node from the queue
 * 4. Repeat 1 and 2 until the queue is empty
 * Time complexity is O(V^2)
 * V is the number of vertices
 */

const buildPath = (parents, targetNode) => {
  var result = [targetNode];
  while (parents[targetNode] !== null) {
    targetNode = parents[targetNode];
    result.push(targetNode);
  }
  return result.reverse();
}

const bfs =  (graph, startNode, targetNode) => {
  var parents = [];
  var queue = [];
  var visited = [];
  var current;
  queue.push(startNode); 
  parents[startNode] = null;
  visited[startNode] = true;
  while (queue.length) {
    current = queue.shift(); // remove the first element in the array
    // check if we are at the destination
    console.log(parents)
    if (current === targetNode) {
      return buildPath(parents, targetNode);
    }
    // if not then continue with the bfs
    for (var i = 0; i < graph.length; i += 1) {
      // For each of the nodes check
      // there's an adjacent node and that's it's not visited
      if (i !== current && graph[current][i] && !visited[i]) {
        parents[i] = current;
        visited[i] = true;
        queue.push(i);
      }
    }
  }
  return null;
};
const graph = [
  [1, 5, 6, 7],
  [1, 6, 0, 8],
  [2, 4, 9, 7]
]
console.log(bfs(graph, 1, 5))