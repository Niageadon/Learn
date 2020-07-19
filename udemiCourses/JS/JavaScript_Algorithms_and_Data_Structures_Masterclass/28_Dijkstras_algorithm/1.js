class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(value, priority) {
		this.values.push({value, priority})
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority)
	}
}

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
	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = [];
		let smallest = Infinity;
		const init = () => {
			for(let vertex in this.adjacencyList) {
				if(vertex === start) {
					distances[vertex] = 0;
					nodes.enqueue(vertex, 0);
				} else {
					distances[vertex] = Infinity;
					nodes.enqueue(vertex, Infinity);
				}
				previous[vertex] = null;
			}
		}
		
		init();
		while (nodes.values.length) {
			smallest = nodes.dequeue().value;
			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if(smallest || distances[smallest] !== Infinity) {
				for(let neighbor in this.adjacencyList[smallest]) {
					// Находим соседей
					let nextNode = this.adjacencyList[smallest][neighbor];
					// Расчитываем расстояние
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					if(candidate < distances[nextNeighbor]) {
						distances[nextNeighbor] = candidate;
						previous[nextNeighbor] = smallest;
						nodes.enqueue(nextNeighbor, candidate)
					}
				}
			}
		}
		return {distance: distances[finish], path};
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

let g = new WeightedGraph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B", 3)
g.addEdge("A", "C", 5)
g.addEdge("B","D", 8)
g.addEdge("C","E", 7)
g.addEdge("D","E", 8)
g.addEdge("D","F", 2)
g.addEdge("E","F", 9)
console.log(g.Dijkstra('A', 'E'))
