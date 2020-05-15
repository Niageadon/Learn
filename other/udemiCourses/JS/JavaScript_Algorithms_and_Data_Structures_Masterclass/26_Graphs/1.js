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
	removeEdge(a, b) {
		const firstNode = this.adjacencyList[a];
		const secondNode = this.adjacencyList[b];
		let index;
		if(firstNode.includes(b)) {
			index = firstNode.findIndex(el => el === 'b')
			firstNode.splice(index, 1);
		}
		if(secondNode.includes(a)) {
			index = secondNode.findIndex(el => el === 'a')
			secondNode.splice(index, 1);
		}
		return this
	}
}

let g = new Graph();
console.log(g.addEdge('boba', 'biba'))
console.log(g.removeEdge('boba', 'biba'))
