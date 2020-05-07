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
		let last = null;
		while(!last) {
			if(temp.next) {
				temp = temp.next
			} else {
				last = temp
			}
		}
		return last
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
		if(this.tail) {
			this.tail = null;
			this.tail = this.head.getLast();
		} else if(this.head) {
			this.head = new Node();
		}
	}
}

console.log(22)
const boba = new SingleLinkedList();
boba.push('1').push('2').push(3).push(4);

console.log(boba)
