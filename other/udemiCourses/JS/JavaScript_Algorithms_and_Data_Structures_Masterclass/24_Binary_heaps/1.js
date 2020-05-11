class MaxBinaryHeap {
	constructor(values) {
		this.values = values;
	}
	insert(value) {
		this.values.push(value);
		this.bubbleUp();
		return this
	}
	bubbleUp() {
		let parentIndex, parent;
		let index = this.values.length - 1;
		let value = this.values[index];
		while (1) {
			parentIndex = Math.floor((index - 1) / 2);
			parent = this.values[parentIndex];
			if(value > parent) {
				this.values[parentIndex] = value;
				this.values[index] = parent;
				index = parentIndex;
			} else {
				return
			}
		}
	}
	log() {
		console.log(this)
	}
}

const heap = new MaxBinaryHeap([100,50,60])
console.log(heap.insert(79).insert(52))
