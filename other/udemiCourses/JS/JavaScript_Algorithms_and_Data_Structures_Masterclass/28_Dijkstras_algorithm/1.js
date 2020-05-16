class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if(!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
		return this.adjacencyList[vertex];
	}
	addEdge(a, b, weight) {
		const firstNode = this.adjacencyList[a] || this.addVertex(a);
		const secondNode = this.adjacencyList[b] || this.addVertex(b);
		if(!firstNode.includes(b)) {
			firstNode.push({node: b, weight})
		}
		if(!secondNode.includes(a)) {
			secondNode.push({node: a, weight})
		}
		return this
	}
}
