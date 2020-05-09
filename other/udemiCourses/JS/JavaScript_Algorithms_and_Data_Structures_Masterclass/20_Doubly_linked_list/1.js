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
			this.head = new Node(val)
		} else {
			this.tail = this.head.getLast().setNext(val)
		}
		this.length++;
		return this
	}
	pop() {
	}
	shift() {
	}
	unshift(val) {
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
boba.push('1').push(2).log()
