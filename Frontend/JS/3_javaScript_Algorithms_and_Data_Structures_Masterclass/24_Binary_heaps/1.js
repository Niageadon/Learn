/*
insert - O(log(N))
remove - O(log(N))
search - O(N)
* */

class MaxBinaryHeap {
	constructor(values) {
		this.values = values;
	}
	insert(value) {
		this.values.push(value);
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
		let value = this.values[index];
		while(index > 0) {
			parentIndex = Math.floor((index - 1) / 2);
			parent = this.values[parentIndex];
			if (value > parent) {
				this.values[parentIndex] = value;
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
			if(leftChildIndex < length && value < this.values[leftChildIndex]) {
				this.swap(this.values, leftChildIndex, index)
				index = leftChildIndex;
				continue;
			}
			if(rightChildIndex < length && value < this.values[rightChildIndex]) {
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

const heap = new MaxBinaryHeap([100,60,50])
console.log(heap.insert(55).insert(39).insert(41).insert(18).insert(27).insert(12).insert(33).extractMax().extractMax())
