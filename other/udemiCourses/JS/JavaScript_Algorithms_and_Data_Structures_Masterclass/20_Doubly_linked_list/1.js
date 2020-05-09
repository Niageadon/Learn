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
		if (!this.length) return this
		this.head = this.head.next;
		this.head.prev = null;
		return this;
	}
	
	unshift(val) {
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
	}
	set(index, value) {
	}
	insert(index, value) {
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
boba.push('1').unshift(3).log()
