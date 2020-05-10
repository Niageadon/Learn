class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val) {
		let node = new Node(val);
		if(!this.size) {
			this.first = node;
			this.last = node;
		} else {
			let temp = this.first;
			this.first = node;
			this.first.next = temp;
		}
		this.size++;
		return this;
	}
	pop() {
		if(!this.size) return this
		if(this.size === 1) this.last = null;
		this.first = this.first.next;
		this.size--;
		return this;
	}
	log() {
		console.log(this)
	}
}

const boba = new Stack();
boba.push(1).push(2).pop().log()
