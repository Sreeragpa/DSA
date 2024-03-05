class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex])this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
        return false
        
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2])
        return false
        let v2index = this.adjacencyList[v1].indexOf(v2)
        let v1index = this.adjacencyList[v2].indexOf(v1)
        this.adjacencyList[v1].splice(v2index,1)
        this.adjacencyList[v2].splice(v1index,1)

    }

    removeEdge2(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2])
        return false
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((item)=>item != v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((item)=>item != v1)

    }

    deleteVertex(v){
        this.adjacencyList[v].forEach(element => {
            this.removeEdge2(v,element)
        });
    }

    deleteVertex2(v){
        while(this.adjacencyList[v].length){
            let adjacentVertex = this.adjacencyList[v].pop();
            this.removeEdge2(adjacentVertex,v)
        }
    }

    DFSrec(vertex){
        
    }
}

const g = new Graph();
g.addVertex('tokyo')
g.addVertex('london')
g.addVertex('india')
g.addVertex('hongkong')
g.addEdge('tokyo','india')
g.addEdge('london','tokyo')
g.addEdge('hongkong','tokyo')
// g.removeEdge2('tokyo','india')
// g.deleteVertex('tokyo')
console.log(g);