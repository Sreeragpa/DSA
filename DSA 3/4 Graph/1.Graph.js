class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        } else {
            console.log("Vertex already exists.");
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1]) {
            console.log(`Vertex ${vertex1} does not exist.`);
            return;
        }

        if (!this.vertices[vertex2]) {
            console.log(`Vertex ${vertex2} does not exist.`);
            return;
        }

        // Add vertex2 to the adjacency list of vertex1
        this.vertices[vertex1].push(vertex2);

        // For an undirected graph, you'd also add vertex1 to the adjacency list of vertex2
        // this.vertices[vertex2].push(vertex1);
    }

    printGraph() {
        console.log("Graph:");
        for (let vertex in this.vertices) {
            console.log(`${vertex} -> ${this.vertices[vertex].join(', ')}`);
        }
    }
}

// Example usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

graph.printGraph();
