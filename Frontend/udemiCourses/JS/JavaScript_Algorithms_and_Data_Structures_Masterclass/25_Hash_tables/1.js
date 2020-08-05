/*
Insert - O(1)
Delete - O(1)
Access - O(1)
* */


class HashTable {
	constructor(size = 3) {
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
	keys() {
		let values = [];
		for(let i = 0; i < this.keyMap.length; i++) {
			if(this.keyMap[i]) {
				for(let j = 0; j < this.keyMap[i].length; j++) {
					if(!values.includes(this.keyMap[i][j][0])) {
						values.push(this.keyMap[i][j][0])
					}
				}
			}
		}
		return values
	}
	values() {
		let values = [];
		for(let i = 0; i < this.keyMap.length; i++) {
			if(this.keyMap[i]) {
				for(let j = 0; j < this.keyMap[i].length; j++) {
					if(!values.includes(this.keyMap[i][j][1])) {
						values.push(this.keyMap[i][j][1])
					}
				}
			}
		}
		return values
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
ht.set('hello', 'bb').set('pov', 'tii').set('cae', 'sdgs').set('dsd', 'ssdgf').set('dsdsd', 'dfdg')

console.log(ht.keys())
console.log(ht.values() )
