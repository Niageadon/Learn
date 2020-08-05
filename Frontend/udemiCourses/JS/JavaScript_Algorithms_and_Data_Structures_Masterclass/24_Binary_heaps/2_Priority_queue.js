class Node {
	constructor({value, priority}) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor(values) {
		this.values = values.map(el => new Node({value: el.value, priority: el.priority}));
	}
	insert({value, priority}) {
		const node = new Node({value, priority});
		this.values.push(node);
		this.bubbleUp();
		return this
	}
	remove(index) {
		this.swap(this.values, index, this.values.length - 1);
		this.values.pop();
		
		return this;
	}
	bubbleUp() {
		let parentIndex, parent;
		let index = this.values.length - 1;
		let node = this.values[index];
		while(index > 0) {
			parentIndex = Math.floor((index - 1) / 2);
			parent = this.values[parentIndex];
			if (node.priority < parent.priority) {
				this.values[parentIndex] = node;
				this.values[index] = parent;
				index = parentIndex;
			} else break
		}
	}
	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();
		this.values[0] = end;
		this.sinkDown();
		return this;
	}
	sinkDown() {
		let index = 0;
		const length = this.values.length;
		const value = this.values[0];
		while(1) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;
			if(leftChildIndex < length && value.priority > this.values[leftChildIndex].priority) {
				this.swap(this.values, leftChildIndex, index)
				index = leftChildIndex;
				continue;
			}
			if(rightChildIndex < length && value.priority > this.values[rightChildIndex].priority) {
				this.swap(this.values, rightChildIndex, index);
				index = rightChildIndex;
				continue;
			} else {
				return this
			}
		}
	}
	log() {
		console.log(this)
	}
	swap(arr, n, m) {
		const temp = arr[m]
		arr[m] = arr[n];
		arr[n] = temp;
	}
}

const heap = new PriorityQueue([{value:1, priority:2}, {value:2, priority:3}])
console.log(heap.insert({value:55, priority:2}).extractMax())
