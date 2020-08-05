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
		// O(N)
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
		// O(1)
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
	get(index) {
		// O(1) - O(N)
		if(index < 0 || index > this.length) return null
		let temp = this.head
		for(let i = 0; i < index; i++) {
			temp = temp.next
		}
		return temp
	}
	set(index, value) {
		// O(1) - O(N)
		let node = this.get(index);
		if(node) {
			node.val = value
		}
		return this
	}
	insert(index, value) {
		// O(1)
		let prevNode = this.get(index - 1);
		let nextNode = this.get(index);
		let node = new Node(value)
		if(nextNode) {
			node.next = nextNode
		}
		if(prevNode) {
			prevNode.next = node;
		} else {
			this.head = node
		}
		this.length++;
		return this
	}
	remove(index, value) {
		// O(1) - O(N)
		let prevNode = this.get(index - 1);
		let nextNode = this.get(index + 1);
		if(prevNode && nextNode) {
			prevNode.next = nextNode;
			this.length--;
		} else if(index === 0) {
			this.shift()
		} else if(index === this.length - 1) {
			this.pop();
		}
		return this
	}
	reverse() {
		// O(N)
		if(this.length <= 1) return this
		const head = this.tail;
		let temp = head;
		for(let i = this.length - 1; i > -1; i--) {
			temp.next = this.get(i);
			temp = temp.next;
		}
		this.head = head;
		this.tail = temp;
		this.tail.next = null;
		
		return this
	}
	log() {
		console.log(this)
	}
}

const boba = new SingleLinkedList();
boba.push('1').push('2').push(3).push(4);
boba.insert(0, 33).reverse().log()//.remove(0)
