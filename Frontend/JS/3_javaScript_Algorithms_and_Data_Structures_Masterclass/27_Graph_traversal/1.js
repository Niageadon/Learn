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
		if(!firstNode || !secondNode) {
			return this
		}
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
	removeVertex(vertex) {
		const connections = this.adjacencyList[vertex];
		connections.forEach(el => {
			this.adjacencyList[el] = this.adjacencyList[el].filter(el => el !== vertex)
		})
		delete this.adjacencyList[vertex];
		return this
	}
	depthFirstRecursive(start) {
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;
		dfs(start);
		return result;
		
		function dfs(vertex) {
			if (!vertex) return null
			visited[vertex] = true;
			result.push(vertex);
			adjacencyList[vertex].forEach(neighbor => {
				if(!visited[neighbor]) {
					return dfs(neighbor)
				}
			})
		}
	}
	depthFirstIterative(start) {
		const stack = [start];
		const result = [];
		const visited = {[start]: true};
		const adjacencyList = this.adjacencyList;
		let currentVertex;
		
		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);
			adjacencyList[currentVertex].forEach(neighbor => {
				if(!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			})
		}
		return result;
	}
	breadthFirstTraversal(start) {
		const result = [];
		const queue = [start];
		const visited = {[start]: true};
		const adjacencyList = this.adjacencyList;
		let currentVertex;
		
		while(queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);
			adjacencyList[currentVertex].forEach(neighbor => {
				if(!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			})
		}
		
		function bft(vertex) {
			adjacencyList[vertex].forEach(neighbor => {
				if(!routes[neighbor] && typeof routes[neighbor] !== 'number') {
					routes[neighbor] = k;
				} else if(routes[neighbor] < k) {
					routes[neighbor] = k;
				}
			})
			k++;
		}
		return result
	}
	log() {
		console.log(this)
	}
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.breadthFirstTraversal('A'))
