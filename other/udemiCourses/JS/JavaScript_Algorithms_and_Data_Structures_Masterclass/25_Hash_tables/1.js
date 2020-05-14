class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size)
	}
	
	set(key, value) {
		const index = this._hash(key);
		if(!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value])
	}
	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		const length = Math.min(key.length, 100);
		for(let i = 0; i < length; i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total
	}
}
function log() {
	console.log(this)
}

const ht = new HashTable();
console.log(value.set('hello', 'bb'))
