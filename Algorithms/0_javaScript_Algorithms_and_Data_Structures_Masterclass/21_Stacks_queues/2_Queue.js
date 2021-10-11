class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		// O(1)
		const node = new Node(val);
		if(!this.size) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}
		this.size++;
		return this;
	}
	dequeue() {
		// O(1)
		if(!this.size) return this;
		this.first = this.first.next;
		if(this.size === 1) {
			this.last = null;
		}
		this.size--;
		return this;
	}
	log() {
		console.log(this)
	}
}

const boba = new Queue();
boba.enqueue(1).enqueue(2).enqueue(3).dequeue().log()
