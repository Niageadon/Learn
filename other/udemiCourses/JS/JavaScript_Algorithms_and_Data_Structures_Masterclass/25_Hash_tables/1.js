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
		return this
	}
	get(key) {
		let index = this._hash(key);
		console.log(this.keyMap[index])
		if(this.keyMap[index].length) {
			if(this.keyMap[index][0] instanceof Array) {
				return this.keyMap[index].find(el => el[0] == key)[1];
			}
			return this.keyMap[index][1]
		}
		return undefined
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
ht.set('hello', 'bb').set('pov', 'tii').set('cae', 'sdgs').set('dsd', 'ssdgf')
console.log(ht.get('cae'))

console.log(ht.keyMap)
