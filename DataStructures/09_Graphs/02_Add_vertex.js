//Declaring graph class;

class Graph {
    constructor(vertex) {
        this.adjacentList = {}
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex])
        this.adjacentList[vertex] = [];
    }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("sanfranscio");
g.adjacentList["sanfranscio"].push("Something")
console.log(g)