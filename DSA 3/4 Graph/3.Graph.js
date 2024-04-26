class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }



  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }



  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    let v2index = this.adjacencyList[v1].indexOf(v2);
    let v1index = this.adjacencyList[v2].indexOf(v1);
    this.adjacencyList[v1].splice(v2index, 1);
    this.adjacencyList[v2].splice(v1index, 1);
  }

  removeEdge2(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (item) => item != v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (item) => item != v1
    );
  }

  deleteVertex(v) {
    this.adjacencyList[v].forEach((element) => {
      this.removeEdge2(v, element);
    });
  }

  deleteVertex2(v) {
    while (this.adjacencyList[v].length) {
      let adjacentVertex = this.adjacencyList[v].pop();
      this.removeEdge2(adjacentVertex, v);
    }
  }

  DFSrec(start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    function DFSHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return DFSHelper(neighbour);
        }
      });
    }

    DFSHelper(start);
    return result;
  }

  DFSiter(start){
    let s = [];
    let visted = {};
    let result = [];
    s.push(start);

    while (s.length > 0) {
      let vertex = s.pop();
      if (!visted[vertex]) {
        visted[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbour) => {
          if (!visted[neighbour]) {
            s.push(neighbour);
          }
        });
      }
    }
    return result;
  }

  BFS(start) {
    let q = [];
    let result = [];
    let visited = {};

    q.push(start);
    while (q.length) {
      let vertex = q.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex]?.forEach((neighbour) => {
          if (!visited[neighbour]) {
            q.push(neighbour);
          }
        });
      }
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E"); 
graph.addVertex("F"); 
graph.addEdge("A", "B");
graph.addEdge("A", "F");
graph.addEdge("F", "E");
graph.addEdge("E", "D");
graph.addEdge("D", "C");
graph.addEdge("B", "C");

// console.log(g.DFSrec("A"));
// console.log(g.DFSiter("A"));
console.log(graph.BFS("A"));
console.log(graph);

