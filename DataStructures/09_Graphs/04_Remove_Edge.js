//Declaring graph class;

class Graph {
    constructor(vertex) {
        this.adjacentList = {}
    }
    addVertex(vertex){
        if(!this.adjacentList[vertex])
        this.adjacentList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacentList[v1].push(v2);
        this.adjacentList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacentList[vertex1] = this.adjacentList[vertex1].filter((v) => v !== vertex2)//keep everything just by removeing vertex2.
        this.adjacentList[vertex2] = this.adjacentList[vertex2].filter((v) => v !== vertex1) //keep everything just by removeing vertex1.
    }
}

let g = new Graph();
// g.addVertex("Tokyo");
// g.addVertex("sanfranscio");
// g.adjacentList["sanfranscio"].push("Something")
g.addVertex("Dallas");
g.addVertex("Boston");
g.addVertex("Neworleans")
g.addEdge("Dallas", "Neworleans")
g.addEdge("Boston","Neworleans")

console.log(g)
// Graph {
//   adjacentList: {
//     Dallas: [ 'Neworleans' ],
//     Boston: [ 'Neworleans' ],
//     Neworleans: [ 'Dallas', 'Boston' ]
//   }
// }
g.removeEdge("Neworleans", "Dallas")
console.log(g)
// Graph {
//   adjacentList: {
//  Dallas: [],
//  Boston: [ 'Neworleans' ],
//  Neworleans: [ 'Boston' ] 
// }
// }
