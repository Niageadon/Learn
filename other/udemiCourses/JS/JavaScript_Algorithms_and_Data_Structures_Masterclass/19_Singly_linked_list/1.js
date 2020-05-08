class Node {
	constructor(val) {
		this.val = val;
		this.next = null
	}
	setNext(next) {
		this.next = new Node(next);
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
class SingleLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		if(!this.head) {
			this.head = new Node(val)
		} else {
			this.tail = this.head.getLast().setNext(val)
		}
		this.length++;
		return this
	}
	pop() {
		if(!this.head) return this
		let current = this.head;
		let tail = current;
		while (current.next) {
			tail = current
			current = current.next
		}
		this.tail = tail;
		this.tail.next = null;
		this.length--;
		if(this.length === 1) {
			this.head.next = null
		}
		return this
	}
	shift() {
		if (!this.head) return this
		this.head = this.head.next;
		this.length--;
		if(this.length === 1) {
			this.tail = null
		}
		return this
	}
	unshift(val) {
		let head = new Node(val);
		head.next = this.head;
		this.head = head;
		this.length++;
		return this
	}
	
	
}

const boba = new SingleLinkedList();
boba.push('1').push('2').push(3)//.push(3).push(4);
boba.unshift(22)
console.log(boba)
