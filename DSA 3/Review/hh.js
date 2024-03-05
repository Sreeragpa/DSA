class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])this.adjacencyList[vertex] = [];
    }

    addEdge(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2])return null
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2])return null
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(item=>item!=v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(item=>item!=v1)
    }

    deleteVertex(v){
        this.adjacencyList[v].forEach(element => {
            this.removeEdge(v,element)
        });
    }

    DFS(start){
        let s = []
        let result =[];
        let visited = {};
        s.push(start);

        while(s.length){
            let vertex = s.pop()
            if(!visited[vertex]){
                visited[vertex] = true;
                result.push(vertex)
                this.adjacencyList[vertex].forEach(neighbour=>{
                    if(!visited[neighbour]){
                        s.push(neighbour)
                    }
                })
            }
        }
        return result
        
    }
}

let graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addEdge('A','B')
graph.addEdge('B','D')
graph.addEdge('A','D')
console.log(graph);
console.log(graph.DFS('A'));