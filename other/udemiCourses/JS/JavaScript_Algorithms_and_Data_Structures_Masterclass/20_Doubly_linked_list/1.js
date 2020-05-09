class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
	setNext(next) {
		this.next = new Node(next);
		this.next.prev = this;
		return this.next;
	}
	getLast() {
		let temp = this.next;
		if(!temp) {
			return this
		}
		while(temp.next) {
			temp = temp.next
		}
		return temp
	}
}
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		// O(1)
		if(!this.head) {
			this.head = new Node(val);
			this.tail = this.head;
		} else {
			this.tail = this.head.getLast().setNext(val)
		}
		this.length++;
		return this
	}
	pop() {
		// O(1)
		switch (this.length) {
			case 0: {
				return this
			}
			case 1: {
				this.tail = this.tail.prev;
				this.head = this.tail;
				break;
			}
			case 2: {
				this.tail = this.tail.prev;
				this.head.next = null;
				break;
			}
			default: {
				this.tail = this.tail.prev;
			}
		}
		this.length--;
		return this;
	}
	
	shift() {
		// O(1)
		if (!this.length) return this
		this.head = this.head.next;
		this.head.prev = null;
		return this;
	}
	
	unshift(val) {
		// O(1)
		if(!this.length) {
			this.push(val)
		}
		let node = new Node(val);
		node.next = this.head;
		this.head.prev = node;
		this.head = node;
		this.length++;
		return this
	}
	get(index) {
		// O(1) - O(N/2)
		if((index < 0) || (index >= this.length)) return null
		if(index < Math.floor(this.length / 2)) {
			let temp = this.head;
			for(let i = 0; i < index; i++) {
				temp = temp.next;
			}
			return temp
		} else {
			let temp = this.tail;
			for(let i = this.length - 1; i > index; i--) {
				temp = temp.prev;
			}
			return temp
		}
	}
	set(index, value) {
		// O(1) - O(N/2)
		let node = this.get(index);
		if(node) {
			node.val = value
		}
		return this
	}
	insert(index, value) {
		// O(1)
		let node = this.get(index);
		if(node) {
			if(!index) {
				this.unshift(value);
			} else if(index === this.length) {
				this.push(value)
			} else {
				let prev = node.prev;
				let next = node.next;
				prev.next = node;
				next.prev = node;
				if(prev) node.prev = prev
				if(next) node.next = next
				this.length++;
			}
		}
		return this
	}
	remove(index, value) {
	}
	reverse() {
	}
	log() {
		console.log(this)
	}
}

const boba = new DoublyLinkedList();
boba.push('1').push(4).set(1, 11).log()
