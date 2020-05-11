class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor(value) {
		this.root = new Node(value)
	}
	insert(value) {
		let temp = this.root;
		const searchPlace = () => {
			if(value < temp.value) {
				if(temp.left) {
					temp = temp.left
					searchPlace();
				} else {
					temp.left = new Node(value)
					return
				}
			} else {
				if(temp.right) {
					temp = temp.right;
					searchPlace();
				} else {
					temp.right = new Node(value)
					return
				}
			}
		}
		
		searchPlace();
		return this;
	}
	log() {
		console.log(this)
	}
}

const tree = new BinarySearchTree(10);
tree.insert(5).insert(7).insert(11).log()
