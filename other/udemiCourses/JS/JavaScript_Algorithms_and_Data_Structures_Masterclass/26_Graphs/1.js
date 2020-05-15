class Graph {
	constructor() {
		this.adjacencyList = {}
	}
	
	addVertex(vertex) {
		if(!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
		return this.adjacencyList[vertex];
	}
	addEdge(a, b) {
		const firstNode = this.adjacencyList[a] || this.addVertex(a);
		const secondNode = this.adjacencyList[b] || this.addVertex(b);
		if(!firstNode.includes(b)) {
			firstNode.push(b)
		}
		if(!secondNode.includes(a)) {
			secondNode.push(a)
		}
		return this
	}
}

let g = new Graph();
console.log(g.addEdge('boba', 'biba'))
